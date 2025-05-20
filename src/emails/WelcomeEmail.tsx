import * as React from 'react';
import { Html } from 'react-email';

interface WelcomeEmailProps {
  firstName: string;
  confirmationUrl: string;
}

export function WelcomeEmail({ firstName, confirmationUrl }: WelcomeEmailProps) {
  return (
    <Html lang="en">
      <body style={styles.body}>
        <div style={styles.container}>
          <h1 style={styles.heading}>Welcome to PonyGlyph!</h1>
          <p style={styles.text}>Hi {firstName},</p>
          <p style={styles.text}>
            Thank you for joining PonyGlyph! We're excited to have you as part of our community.
          </p>
          <p style={styles.text}>
            To get started, please confirm your email address by clicking the button below:
          </p>
          <a href={confirmationUrl} style={styles.button}>
            Confirm Email Address
          </a>
          <p style={styles.text}>
            If you didn't create an account with PonyGlyph, you can safely ignore this email.
          </p>
          <div style={styles.footer}>
            <p style={styles.footerText}>
              © 2025 PonyGlyph. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: '#f6f6f6',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
    padding: 0,
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    margin: '40px auto',
    maxWidth: '600px',
    padding: '40px',
  },
  heading: {
    color: '#f97316',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 24px',
    textAlign: 'center' as const,
  },
  text: {
    color: '#333333',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0 0 24px',
  },
  button: {
    backgroundColor: '#f97316',
    borderRadius: '4px',
    color: '#ffffff',
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '24px 0',
    padding: '12px 24px',
    textDecoration: 'none',
  },
  footer: {
    borderTop: '1px solid #e5e5e5',
    marginTop: '32px',
    paddingTop: '24px',
  },
  footerText: {
    color: '#666666',
    fontSize: '14px',
    margin: 0,
    textAlign: 'center' as const,
  },
};