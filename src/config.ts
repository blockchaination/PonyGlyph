// Backend API URL
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://ponyglyph-backend.herokuapp.com' // Update this with your actual production URL
  : 'http://localhost:3000';