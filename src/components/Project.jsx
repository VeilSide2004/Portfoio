import { ArrowRight, GithubIcon } from 'lucide-react';
import React from 'react';

const projects = [
    {
        id: 1,
        title: "Geo Pixel Analyzer",
        description: "GeoPixel Analyzer is an AI-powered tool that analyzes satellite images to detect and highlight changes in river water levels caused by natural calamities",
        image: "/public/Projects/GeoPixel Analyzer.png",
        tags: ["Ai/ML", "Threshold model", "Streamlit"],
        githubURL: "https://github.com/VeilSide2004?tab=repositories"
    },

    {
        id: 2,
        title: "GearQuest(E-commerse)",
        description: "GearQuest is an e-commerce platform designed for adventure enthusiasts to explore and purchase high-quality outdoor gear with a seamless user experience.",
        image: "/public/Projects/Gear Quest.png",
        tags: ["PHP", "HTML", "CSS", "Javascript", "MySQL", "Figma"],
        githubURL: "https://github.com/VeilSide2004/GearQuest"
    },

    {
        id: 3,
        title: "UltraEdit-Clone",
        description: "I cloned the UltraEdit website to practice and improve my frontend skills by recreating its responsive layout, design, and interactive elements using modern web technologies.",
        image: "/public/Projects/UltraEdit.png",
        tags: ["HTML", "CSS"],
        githubURL: "https://github.com/VeilSide2004/UltraEdit_clone"

    }
]

const Project = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects where I applied my frontend skills to build responsive, interactive, and user-friendly web applications.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tags) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-primary">
                                            {tags}
                                        </span>
                                    ))}

                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubURL}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <GithubIcon size={20} />
                                    </a>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/VeilSide2004" 
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My GitHub <ArrowRight size={16} />
                    </a>

                </div>

            </div>

        </section>
    );
};

export default Project;
