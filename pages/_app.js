import MainLayout from '@/Components/MainLayout';
import styles from '@/styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
      router.push('/Home');
  }, []);

  return <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
}
