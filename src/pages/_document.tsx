import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                        content="/favicons/browserconfig.xml"
                        name="msapplication-config"
                    />
                    <link href="/favicons/favicon.ico" rel="icon" />
                    <link href="/favicons/site.webmanifest" rel="manifest" />
                    <link
                        href="/favicons/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/favicons/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/favicons/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        rel="mask-icon"
                        href="/favicons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
