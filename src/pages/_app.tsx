import { DefaultSeo } from 'next-seo';
import seo from '../../seo.config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...seo} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
