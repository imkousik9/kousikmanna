import { GetStaticProps } from 'next';

import { fetchProjects } from '../lib/api';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export interface projectPropsType {
    title: string;
    url: string;
    gitHubRepository?: string;
    image: {
        url: string;
    };
}

interface Props {
    projects: projectPropsType[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const projects = await fetchProjects();

    return {
        props: {
            projects: projects?.data?.projectsCollection?.items
        },
        revalidate: 200
    };
};

export default function App({ projects }) {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Projects projects={projects} />
            <Contact />
            <Footer />
        </div>
    );
}
