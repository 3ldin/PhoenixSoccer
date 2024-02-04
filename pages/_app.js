import '@/styles/globals.css'
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans ({
  subsets: ['latin'],
  weight: ['200', '300','400','500','600','700'],
});

export default function App({ Component, pageProps }) {
  return (
  <main className={dm_sans.className}>
    <Component {...pageProps} />
  </main>
  );
}
