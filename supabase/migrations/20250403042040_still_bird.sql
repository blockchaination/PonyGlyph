/*
  # Create new experiences with provided images

  1. Changes
    - Add new experiences with authentic images
    - Update locations and details
    - Maintain existing table structure and policies

  2. Security
    - No changes to security policies
*/

-- Delete existing experiences
DELETE FROM experiences;

-- Insert new experiences
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
  'Traditional Pottery Workshop in Safi',
  'Master the art of Moroccan pottery in the historic pottery capital of Morocco. Learn traditional techniques, create your own pieces, and discover the rich cultural heritage of Moroccan ceramics.',
  'Safi, Morocco',
  'Marrakech-Safi',
  85.00,
  '/images/pottery.jpg',
  '4 hours',
  6,
  4.9,
  auth.uid(),
  'Karim Benali',
  ARRAY['crafts', 'culture', 'art'],
  ARRAY['English', 'French', 'Arabic'],
  'easy',
  ARRAY['All materials', 'Expert instruction', 'Traditional tea ceremony', 'Your finished creations', 'Local artisan guide'],
  ARRAY['Transportation', 'Personal expenses'],
  '{"latitude": 32.2994, "longitude": -9.2372, "address": "Safi Pottery Quarter"}',
  'Flexible - Full refund up to 24 hours before the experience'
),
(
  'Sunset Beach Yoga in Essaouira',
  'Experience a transformative yoga session on the beautiful beaches of Essaouira. Practice mindfulness and rejuvenate your body while watching the sun set over the Atlantic Ocean.',
  'Essaouira, Morocco',
  'Marrakech-Safi',
  45.00,
  '/images/yoga.jpg',
  '90 minutes',
  12,
  4.8,
  auth.uid(),
  'Maya Thompson',
  ARRAY['wellness', 'beach', 'nature'],
  ARRAY['English', 'French'],
  'easy',
  ARRAY['Yoga mats', 'Professional instruction', 'Beach setup', 'Fresh fruit and water'],
  ARRAY['Transportation', 'Personal items'],
  '{"latitude": 31.5084, "longitude": -9.7697, "address": "Essaouira Beach Club"}',
  'Moderate - 80% refund up to 24 hours before the experience'
),
(
  'Luxury Hammam Experience',
  'Indulge in an authentic Moroccan hammam experience in a stunning traditional setting. Enjoy aromatic steam rooms, traditional black soap scrub, and a relaxing massage by candlelight.',
  'Marrakech, Morocco',
  'Marrakech-Safi',
  120.00,
  '/images/hammam.jpg',
  '2 hours',
  4,
  5.0,
  auth.uid(),
  'Fatima El Amrani',
  ARRAY['wellness', 'luxury', 'culture'],
  ARRAY['English', 'French', 'Arabic'],
  'easy',
  ARRAY['Traditional hammam treatments', 'Luxury products', 'Private pool access', 'Mint tea service', 'Spa robes and slippers'],
  ARRAY['Transportation', 'Gratuities'],
  '{"latitude": 31.6295, "longitude": -7.9811, "address": "Royal Spa Marrakech"}',
  'Strict - 50% refund up to 48 hours before the experience'
),
(
  'Atlantic Surf Adventure',
  'Ride the perfect waves of Morocco''s Atlantic coast. Whether you''re a beginner or experienced surfer, discover the thrill of surfing in one of the world''s best surf destinations.',
  'Agadir, Morocco',
  'Souss-Massa',
  75.00,
  '/images/surf.jpg',
  '3 hours',
  8,
  4.7,
  auth.uid(),
  'Omar Boutaleb',
  ARRAY['adventure', 'sports', 'beach'],
  ARRAY['English', 'French', 'Arabic'],
  'moderate',
  ARRAY['Surfboard rental', 'Wetsuit', 'Professional instruction', 'Safety equipment', 'Beach refreshments'],
  ARRAY['Transportation', 'Insurance'],
  '{"latitude": 30.4202, "longitude": -9.6026, "address": "Agadir Surf Club"}',
  'Flexible - Full refund up to 24 hours before the experience'
),
(
  'Desert Quad Biking Adventure',
  'Experience an adrenaline-pumping adventure through the Moroccan desert on powerful quad bikes. Navigate through stunning terrain while discovering the raw beauty of the landscape.',
  'Marrakech Palm Grove, Morocco',
  'Marrakech-Safi',
  95.00,
  '/images/quad.jpg',
  '3 hours',
  10,
  4.8,
  auth.uid(),
  'Youssef Mansouri',
  ARRAY['adventure', 'desert', 'sports'],
  ARRAY['English', 'French', 'Arabic'],
  'moderate',
  ARRAY['Quad bike rental', 'Safety equipment', 'Professional guide', 'Safety briefing', 'Bottled water'],
  ARRAY['Transportation', 'Insurance', 'Personal expenses'],
  '{"latitude": 31.6295, "longitude": -7.9811, "address": "Palm Grove Quad Center"}',
  'Moderate - 80% refund up to 48 hours before the experience'
);