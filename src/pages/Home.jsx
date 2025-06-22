import About from "../components/About";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle"


const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle complete */}
            <ThemeToggle />

            {/* the star and meteor background */}
            <StarBackground />

            {/* this is the navbar */}
            <Navbar />

            {/* the main content */}
            <main>
                <Hero />
                <About />
                <Skills />
                <Project />
                <Certificates />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default Home;
