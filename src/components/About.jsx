import { CodeXml, LucideBriefcaseBusiness, UserCircle2 } from 'lucide-react';
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Ui/Ux Designer</h3>

                        <p className="text-muted-foreground">
                            I am a B.Tech 4th-year student at SRM Institute of Science and Technology, driven by a genuine passion for frontend development and UI/UX design. I find great satisfaction in crafting seamless, engaging, and visually appealing user experiences that bring ideas to life on the web. My interest lies in creating interfaces that are not only aesthetically pleasing but also intuitive and accessible to users.
                        </p>

                        <p className="text-muted-foregrpound">
                            Currently, I have developed strong foundational skills in HTML and CSS, which have allowed me to build clean, responsive layouts. I am actively learning JavaScript and Reaggct JS to make my websites more dynamic and interactive. While I am still in the process of gaining expertise, I am highly committed to continuous learning and always looking for opportunities to improve my craft.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get it touch
                            </a>

                            <a href="https://drive.google.com/drive/folders/13Gr9fmFUrKw3lw6zKARhkF7xe_mZHiUB" className="cosmic-button" download>
                                Download CV
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"><CodeXml className="h-6 w-6 text-primary"/></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        I build responsive, interactive, and visually appealing frontends powered by HTML, CSS, JavaScript, and React JS.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"><UserCircle2 className="h-6 w-6 text-primary"/></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Ui/Ux Design</h4>
                                    <p className="text-muted-foreground">
                                        I create user-centered, visually appealing UI/UX designs using Figma, ensuring seamless and intuitive user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"><LucideBriefcaseBusiness className="h-6 w-6 text-primary"/></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work</h4>
                                    <p className="text-muted-foreground">
                                        I bring passion, dedication, attention to detail, and a continuous learning mindset, always working hard to grow and create impactful web experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
