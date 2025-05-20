/*
  # Update experiences with new images and locations

  1. Changes
    - Add new experiences with provided images
    - Update locations and details
    - Improve descriptions and included items

  2. Security
    - Maintain existing RLS policies
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
  'Immerse yourself in the ancient art of Moroccan pottery in the historic pottery capital of Safi. Learn traditional techniques from master artisans, create your own pieces using authentic materials, and discover the rich cultural heritage of Moroccan ceramics.',
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
  'Experience a transformative yoga session on the beautiful beaches of Essaouira. Practice mindfulness and rejuvenate your body while watching the sun set over the Atlantic Ocean, guided by experienced instructors in this serene coastal setting.',
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
  'Luxury Hammam Experience in Marrakech',
  'Indulge in an authentic Moroccan hammam experience in a stunning traditional setting. Enjoy aromatic steam rooms, traditional black soap scrub, and a relaxing massage by candlelight in our beautiful spa with a private pool.',
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
  'Atlantic Surf Adventure in Agadir',
  'Ride the perfect waves of Agadir''s Atlantic coast. Whether you''re a beginner or experienced surfer, discover the thrill of surfing in one of Morocco''s premier surf destinations, with professional instruction and stunning coastal views.',
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
  'Desert Quad Biking Adventure in Marrakech',
  'Experience an adrenaline-pumping adventure through the Moroccan desert on powerful quad bikes. Navigate through stunning terrain while discovering the raw beauty of the landscape, guided by experienced instructors.',
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