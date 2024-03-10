import MainLayout from '@/Components/MainLayout';
import styles from '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
}
