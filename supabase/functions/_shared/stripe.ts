import Stripe from 'npm:stripe@13.9.0';

// Get the secret key from the environment variables
const secretKey = Deno.env.get('STRIPE_SECRET_KEY');
if (!secretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

export const stripe = new Stripe(secretKey, {
  apiVersion: '2023-10-16',
});