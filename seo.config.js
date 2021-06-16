const title = 'Kousik Manna | Full stack web developer';
const description =
    "Hi, I'm Kousik Manna, a passionate self-taught full stack web developer. ";

const SEO = {
    title,
    description,
    canonical: 'https://kousikmanna.vercel.app',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://kousikmanna.vercel.app',
        title,
        description,
        images: [
            {
                url: 'https://kousikmanna.vercel.app/images/banner.png',
                width: 1200,
                height: 630,
                alt: title
            }
        ],
        site_name: 'kousikmanna'
    },
    twitter: {
        handle: '@imkousik9',
        site: '@imkousik9',
        cardType: 'summary_large_image'
    }
};

export default SEO;
