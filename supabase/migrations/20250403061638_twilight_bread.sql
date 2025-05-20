/*
  # Add reviews table and update experiences

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `experience_id` (uuid, references experiences)
      - `user_id` (uuid, references auth.users)
      - `booking_id` (uuid, references bookings)
      - `rating` (integer, 1-5)
      - `comment` (text)
      - `photos` (text array)
      - `tags` (text array)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `reviews` table
    - Add policies for:
      - Anyone can read reviews
      - Users can create reviews for their bookings
      - Users can update their own reviews
      - Users can delete their own reviews

  3. Triggers
    - Update experience average rating when reviews change
*/

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_id uuid REFERENCES experiences(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  booking_id uuid REFERENCES bookings(id) ON DELETE CASCADE NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  photos text[] DEFAULT '{}',
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT one_review_per_booking UNIQUE (booking_id)
);

-- Enable RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can create reviews for their bookings"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM bookings
      WHERE bookings.id = booking_id
      AND bookings.user_id = auth.uid()
      AND bookings.status = 'confirmed'
    )
  );

CREATE POLICY "Users can update their own reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create function to update experience rating
CREATE OR REPLACE FUNCTION update_experience_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE experiences
  SET rating = (
    SELECT COALESCE(ROUND(AVG(rating)::numeric, 1), 0)
    FROM reviews
    WHERE experience_id = NEW.experience_id
  )
  WHERE id = NEW.experience_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for rating updates
CREATE TRIGGER update_rating_on_review_change
  AFTER INSERT OR UPDATE OR DELETE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_experience_rating();

-- Create updated_at trigger
CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes
CREATE INDEX reviews_experience_id_idx ON reviews(experience_id);
CREATE INDEX reviews_user_id_idx ON reviews(user_id);
CREATE INDEX reviews_booking_id_idx ON reviews(booking_id);
CREATE INDEX reviews_rating_idx ON reviews(rating);

-- Add predefined tags for reviews
COMMENT ON COLUMN reviews.tags IS 'Predefined tags: Great Host, Memorable Experience, Would Recommend, Good Value, Well Organized, Beautiful Location, Friendly Guide, Authentic Experience, Safe Environment, Learned Something New';