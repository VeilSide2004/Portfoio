import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const certificates = [
    {
        id: 1,
        title: "5G for Everyone",
        issuer: "Coursera",
        image: "/public/Certificates/5G.png",
        link: "https://drive.google.com/file/d/17CE7GXWKmmncEi665vhM1HGJc1dCIcER/view?usp=sharing"
    },
    {
        id: 2,
        title: "Associate in Cybersecurity",
        issuer: "Fortinet",
        image: "/public/Certificates/Fortinet.png",
        link: "https://drive.google.com/file/d/1VRu_Cdx9vi3aRbCxUqmL3RMJmM3EWbWT/view?usp=sharing"
    },
    {
        id: 3,
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Coursera",
        image: "/public/Certificates/Bits_Bytes.png",
        link: "https://drive.google.com/file/d/17ZutNBKowRvk2_3uQH0Pu0L2uleHPyfT/view?usp=sharing"
    },

    
    {
        id: 4,
        title: "AWS Academy Machine Learning Foundation",
        issuer: "AWS",
        image: "/public/Certificates/AWS.png",
        link: "https://drive.google.com/file/d/1RxRN9pm2yLtMPdT6Wj6P0UB5knDxJbnV/view?usp=sharing"
    },

     {
        id: 5,
        title: "Software Engineering essentials",
        issuer: "Coursera",
        image: "/public/Certificates/Software_Engineering.png",
        link: "https://drive.google.com/file/d/1kJyU9jqWaZdEOuiJcs1R8M8kpCIczh4J/view?usp=sharing"
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My <span className="text-primary">Certificates</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I am a passionate student actively building my skills in frontend development and UI/UX design. I have earned certificates across various domains that showcase my continuous learning and dedication to mastering new technologies.
                </p>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((certificate, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={certificate.image} alt={certificate.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">{certificate.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{certificate.issuer}</p>

                                <div className="flex justify-between items-center">
                                    <a href={certificate.link} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                                        View Certificate <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://drive.google.com/drive/folders/1A2WdSVIC3u_Lcb-3BxGgiyzygojdLf6Z?usp=sharing"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check my other certificates <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
