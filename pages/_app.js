import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
