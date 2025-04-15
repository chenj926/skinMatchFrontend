import '../styles/globals.css';
import { useEffect } from 'react';
import { loadStoredAuth } from '../utils/api';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load auth token on app startup
    loadStoredAuth();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;