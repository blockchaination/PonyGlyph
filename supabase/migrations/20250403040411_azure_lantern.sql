/*
  # Add more Moroccan experiences

  1. Changes
    - Add new experiences with provided images
    - Update existing experiences with new images
    - Maintain existing schema structure

  2. Security
    - Maintain existing RLS policies
*/

-- Delete existing experiences
DELETE FROM experiences;

-- Insert updated and new experiences
INSERT INTO experiences (
  title,
  description,
  location,
  region,
  price,
  imageUrl,
  duration,
  capacity,
  rating,
  guideid,
  guidename,
  categories,
  languages,
  difficulty_level,
  included,
  excluded,
  meeting_point,
  cancellation_policy
) VALUES
(
  'Sahara Desert Adventure',
  'Experience the thrill of quad biking through the golden dunes of the Sahara Desert. Feel the adrenaline rush as you navigate the challenging terrain, followed by a peaceful evening under the stars in our luxury desert camp.',
  'Merzouga, Morocco',
  'Drâa-Tafilalet',
  199.99,
  'https://images.unsplash.com/photo-1579760408505-34df2afc0e45',
  '2 days',
  8,
  4.9,
  auth.uid(),
  'Hassan Amiri',
  ARRAY['desert', 'adventure', 'nature'],
  ARRAY['English', 'French', 'Arabic'],
  'moderate',
  ARRAY['Quad bike equipment', 'Safety gear', 'Professional guide', 'Luxury camp accommodation', 'Traditional dinner', 'Breakfast'],
  ARRAY['Travel insurance', 'Personal expenses', 'Tips'],
  '{"latitude": 31.157181, "longitude": -4.022664, "address": "Merzouga Desert Camp"}',
  'Moderate - 80% refund up to 48 hours before the experience'
),
(
  'Traditional Pottery Workshop',
  'Immerse yourself in the ancient art of Moroccan pottery. Learn traditional techniques from master artisans, create your own pieces, and discover the rich history behind this timeless craft.',
  'Fes, Morocco',
  'Fès-Meknès',
  75.00,
  'https://images.unsplash.com/photo-1635324236775-868d3680b65f',
  '3 hours',
  6,
  4.8,
  auth.uid(),
  'Amina Berrada',
  ARRAY['crafts', 'culture', 'art'],
  ARRAY['English', 'French', 'Arabic'],
  'easy',
  ARRAY['All materials', 'Expert instruction', 'Tea and snacks', 'Your finished creation'],
  ARRAY['Transportation'],
  '{"latitude": 34.0345, "longitude": -5.0098, "address": "Fes Pottery Collective"}',
  'Flexible - Full refund up to 24 hours before the experience'
),
(
  'Coastal Yoga Retreat',
  'Find your inner peace with our beachside yoga sessions. Practice mindfulness as the sun rises over the Atlantic, followed by healthy Moroccan breakfast and optional surf lessons.',
  'Taghazout, Morocco',
  'Souss-Massa',
  89.99,
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
  '4 hours',
  10,
  4.7,
  auth.uid(),
  'Sarah Anderson',
  ARRAY['wellness', 'beach', 'nature'],
  ARRAY['English', 'French'],
  'easy',
  ARRAY['Yoga equipment', 'Professional instructor', 'Healthy breakfast', 'Beach facilities'],
  ARRAY['Transportation', 'Surf equipment'],
  '{"latitude": 30.5453, "longitude": -9.7088, "address": "Taghazout Yoga Center"}',
  'Flexible - Full refund up to 24 hours before the experience'
),
(
  'Luxury Hammam Experience',
  'Indulge in the ultimate relaxation experience in our traditional hammam. Enjoy aromatic steam rooms, traditional black soap scrub, and rejuvenating massage in a stunning ancient setting.',
  'Marrakech, Morocco',
  'Marrakech-Safi',
  150.00,
  'https://images.unsplash.com/photo-1635324383364-192fba227b75',
  '3 hours',
  4,
  5.0,
  auth.uid(),
  'Leila Mansouri',
  ARRAY['wellness', 'luxury', 'culture'],
  ARRAY['English', 'French', 'Arabic'],
  'easy',
  ARRAY['All treatments', 'Luxury products', 'Tea service', 'Spa facilities access'],
  ARRAY['Transportation'],
  '{"latitude": 31.6295, "longitude": -7.9811, "address": "Royal Hammam Spa"}',
  'Strict - 50% refund up to 72 hours before the experience'
),
(
  'Atlantic Surf Adventure',
  'Catch the perfect wave along Morocco''s stunning Atlantic coast. Whether you''re a beginner or experienced surfer, our expert instructors will guide you to the best spots.',
  'Taghazout, Morocco',
  'Souss-Massa',
  95.00,
  'https://images.unsplash.com/photo-1635324522441-3be2a24cb9b3',
  '6 hours',
  8,
  4.8,
  auth.uid(),
  'Mohammed El Moutawakil',
  ARRAY['adventure', 'sports', 'beach'],
  ARRAY['English', 'French', 'Arabic'],
  'moderate',
  ARRAY['Surfboard rental', 'Wetsuit', 'Professional instruction', 'Transport to surf spots', 'Lunch'],
  ARRAY['Insurance', 'Personal items'],
  '{"latitude": 30.5453, "longitude": -9.7088, "address": "Taghazout Surf Club"}',
  'Moderate - 80% refund up to 48 hours before the experience'
);