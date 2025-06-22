import { ArrowUp } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Aranya Mondal, All right reserved
            </p>
            <p>The "Send Me a message" section is not fuctional righ now you can send me email directly using my email</p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={16} />
            </a>
        </footer>
    );
};

export default Footer;
