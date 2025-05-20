/*
  # Delete all experiences

  1. Changes
    - Delete all existing experiences from the experiences table
    - Keep table structure intact
    - Maintain existing RLS policies

  2. Security
    - No changes to security policies
*/

-- Delete all experiences
DELETE FROM experiences;