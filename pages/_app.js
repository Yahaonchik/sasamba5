import './teleporthq.css';
import './style.css';
import '../styles/problem-pages.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import SiteTagline from '../components/SiteTagline';
import { nunito, roboto } from '../utils/fonts';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${nunito.variable} ${roboto.variable}`}>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <Component {...pageProps} />
      <SiteTagline />
    </div>
  );
}
