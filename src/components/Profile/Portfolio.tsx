import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import ProjectCard from './ProjectCard';
import { Mail, Linkedin, Github } from 'lucide-react';

// Main Portfolio Component
type Section = 'home' | 'projects' | 'about';
const FloatingText: React.FC<{ children: React.ReactNode, position: [number, number, number], fontSize: number, color: string, anchorX: string, anchorY: string, outlineWidth: number, outlineColor: string }> = ({ children, ...props }) => {
    const ref = React.useRef(null);
    useFrame(({ clock }) => {
        if (ref.current) {
            if (ref.current && 'position' in ref.current) {
                (ref.current as any).position.z = Math.sin(clock.getElapsedTime()) * 0.2;
            }
        }
    });
    return (
        <Text ref={ref} {...props}>
            {children}
        </Text>
    );
};

const Portfolio = () => {
    const [currentSection, setCurrentSection] = useState<Section>('home');

    const projects = [
        {
            title: 'Stationery E-commerce Application',
            description: 'MERN stack project for family business. Implemented product management using MongoDB and Node.js. Developed cart features using React.js and Context API.',
            technology: 'MongoDB, Express, React, Node.js',
            github: 'https://github.com/SD-CODE-OEB/stationery_react',
            demo: 'https://sd-code-oeb.github.io/stationery_react/'
        },
        {
            title: 'Realtime T-shirt Ordering App',
            description: 'Frontend web application for real-time ordering. Implemented dynamic T-shirt cards and search functionality. Developed cart and price calculation features.',
            technology: 'React, Context API',
            github: 'https://github.com/SD-CODE-OEB/TSR-ARENA_appweave',
            demo: 'https://sd-code-oeb.github.io/TSR-ARENA_appweave/'
        },
        {
            title: 'Mini-Blog App',
            description: 'Full stack blog application using Django. Implemented user authentication and CRUD operations. Used HTML, CSS3, JavaScript, Jinja2, Python, SQLite3.',
            technology: 'Django, HTML, CSS, JavaScript, Python, SQLite3',
            github: 'https://github.com/SD-CODE-OEB/DAS-MODEL',
        },
        {
            title: 'Reusable Web Components',
            description: 'Created reusable components including loaders and page-changers. Used HTML + CSS3 and Vanilla JavaScript.',
            technology: 'HTML, CSS, JavaScript',
            github: 'https://github.com/SD-CODE-OEB/Frontend-pieces',
            demo: 'https://sd-code-oeb.github.io/Frontend-pieces/'
        }
    ];

    const sections = {
        home: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="min-h-screen flex items-center w-full"
            >
                <div className="absolute inset-0">
                    <Canvas className='h-full w-full'>
                        <OrbitControls enableZoom={true} />
                        <Stars />
                        <FloatingText
                            position={[0, 2, 0]}
                            fontSize={1}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                            outlineWidth={0.06}
                            outlineColor="orange"
                        >
                            Syed Shoeb Uddin
                        </FloatingText>
                    </Canvas>
                </div>
                <div className="relative z-10 max-w-7xl overflow-y-auto h-full">
                    <h1 className="text-6xl font-bold text-white mb-6">
                        Frontend Developer &amp;
                        <span className="text-orange-500"> Engineer</span>
                    </h1>
                    <p className="text-gray-300 text-xl mb-8 max-w-2xl">
                        Bringing ideas to life through code and creativity. Specialized in building immersive web experiences.
                    </p>
                    <div className="flex gap-4">
                        <motion.button
                            className="bg-orange-500 text-white px-8 py-3 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setCurrentSection('projects')}
                        >
                            View Projects
                        </motion.button>
                        <motion.button
                            className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setCurrentSection('about')}
                        >
                            About Me
                        </motion.button>
                    </div>
                    <hr className="my-8 border-gray-700" />
                    <div className="text-gray-300">
                        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                        <div className="flex items-center gap-4 mt-4">
                            <Mail className="text-orange-500" size={24} />
                            <a href="mailto:ushoeb25@gmail.com" className="hover:text-orange-500">
                                ushoeb25@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <Linkedin className="text-orange-500" size={24} />
                            <a href="https://linkedin.com/in/shoebuddin944" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                                LinkedIn Profile
                            </a>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/sd-code-oeb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/shoebuddin944" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        ),
        projects: (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen py-32 w-full"
            >
                <div className="absolute inset-0">
                    <Canvas>
                        <OrbitControls />
                        <Stars />
                    </Canvas>
                </div>
                <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className="flex justify-center mt-8 relative z-40">
                    <motion.button
                        className="bg-orange-500 text-white px-8 py-3 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setCurrentSection('home')}
                    >
                        Back to Home
                    </motion.button>
                </div>
            </motion.div>
        ),
        about: (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-auto py-32"
            >
                <div className="absolute inset-0 h-screen w-screen">
                    <Canvas className='h-full w-full'>
                        <OrbitControls />
                        <Stars />
                    </Canvas>
                </div>
                <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
                <div className="max-w-4xl text-gray-300 space-y-6">
                    <p>
                        I'm a dedicated undergraduate engineer focusing on frontend development with experience in React.js, Next.js, and styling libraries (ShadCN, Tailwind CSS, Bootstrap). Currently expanding knowledge of MERN stack and seeking an Infosys Instep Internship.
                    </p>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                    <p>
                        <strong>Bachelor of Technology in Computer Science with minor in Data Science (2021-25)</strong><br />
                        Kasireddy Narayanreddy College Of Engineering, Hyderabad<br />
                        CGPA: 7.53
                    </p>
                    <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                    <p>
                        <strong>CLEARSPOT.AI (Sep 2024 - Current)</strong><br />
                        Lead Front-end Developer Intern (Remote - Orlando, Florida)<br />
                        - Developed web-based solution for Solar Panel monitoring with Drone Technology<br />
                        - Created full-stack application using AWS, Python, and Google Cloud Platform<br />
                        - Achieved 20% reduction in page load time<br />
                        - Worked on cloud technology adoption<br />
                        - Used technologies including Next.js, Tailwind CSS, and Docker
                    </p>
                    <p>
                        <strong>TECHPLEMENT (Jun - Jul 2024)</strong><br />
                        Front-end Intern (Remote - Mumbai, Maharashtra)<br />
                        - Developed Vanilla JavaScript sites with 20% reduced load time<br />
                        - Collaborated on frontend application development using Google Cloud Platform APIs<br />
                        - Used HTML, Bootstrap CSS, Vanilla JavaScript, FirebaseDB, and Vercel deployment
                    </p>
                    <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                    <p>
                        - Languages: C, Python, JavaScript, HTML + CSS<br />
                        - Libraries: Bootstrap, Tailwind CSS, Python Libraries, ReactJS<br />
                        - Web Dev Tools: VS Code, Git, GitHub<br />
                        - Frameworks: Django, Vite, NEXT.js<br />
                        - Cloud/Databases: MongoDB, Docker
                    </p>
                    <div className="flex justify-center mt-8 relative z-40">
                        <motion.button
                            className="bg-orange-500 text-white px-8 py-3 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setCurrentSection('home')}
                        >
                            Back to Home
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        )
    };

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-6 h-full">
                {sections[currentSection]}
            </div>
        </div>
    );
};

export default Portfolio;
