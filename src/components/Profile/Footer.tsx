import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 w-full bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-300 mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                        <div className="flex items-center gap-4 mt-4">
                            <Mail className="text-orange-500" size={24} />
                            <a href="mailto:ushoeb25@gmail.com" className="hover:text-orange-500">
                                ushoeb25@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <Linkedin className="text-orange-500" size={24} />
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
