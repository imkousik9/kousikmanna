import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { GetStaticProps } from 'next';
import { fetchEntries } from '../../utils/contentfulProjects';
import Footer from '../components/Footer/Footer';

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetchEntries();
    const projectsOnly = await res.filter(
        (p) => p.sys.contentType.sys.id === 'projects'
    );

    const projects = await projectsOnly.map((p) => {
        return p.fields;
    });

    return {
        props: {
            projects
        },
        revalidate: 60
    };
};

export default function App({ projects }) {
    return (
        <div>
            <Head>
                <title>Kousik Manna</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Home />
            <About />
            <Projects projects={projects} />
            <Contact />
            <Footer />
        </div>
    );
}
