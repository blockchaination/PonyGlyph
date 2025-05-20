import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import App from './App.tsx';
import './index.css';
import { useAuthStore } from './stores/authStore';

// Initialize Sentry only in production
if (import.meta.env.PROD) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: ["localhost", "ponyglyph.com"],
      }),
      new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of transactions in development
    // Session Replay
    replaysSessionSampleRate: 0.1, // Sample rate for regular sessions
    replaysOnErrorSampleRate: 1.0, // Sample rate for sessions with errors
    enabled: true,
    environment: import.meta.env.MODE,
  });
}

// Check auth status on app load
useAuthStore.getState().checkAuth();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  </StrictMode>
);