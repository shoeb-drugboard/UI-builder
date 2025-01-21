// pages/index.tsx
import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { Environment, Float, OrbitControls, Sparkles } from '@react-three/drei'
import { motion } from 'motion/react'

// Types
interface ProjectType {
    title: string
    description: string
    tech: string[]
    link: string
}

interface SectionProps {
    projects: ProjectType[]
}

// 3D Components
const Scene = () => {
    return (
        <Float rotationIntensity={0.4} floatIntensity={0.8}>
            <mesh>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <meshStandardMaterial color="#ff6b6b" metalness={0.5} roughness={0.4} />
            </mesh>
        </Float>
    )
}

// Project Section
const Projects: React.FC<SectionProps> = ({ projects }) => {
    return (
        <section id="projects" className="py-20 bg-gray-900 relative">
            <div className="absolute inset-0 w-screen">
                <Canvas className='w-full'>
                    <Suspense fallback={null}>
                        <Sparkles count={200} radius={50} size={5} />
                        <Environment preset="night" />
                    </Suspense>
                </Canvas>
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center w-full">
                <motion.h2
                    className="text-4xl font-bold mb-10 text-center text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 rounded-lg overflow-hidden p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="inline-block bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors text-white"
                            >
                                View Project
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Main Page
const ProfileHome: NextPage = () => {
    // const [isLoaded, setIsLoaded] = useState(false)

    const projects: ProjectType[] = [
        {
            title: "Stationery E-commerce Application",
            description: "MERN stack project for family business. Implemented product management using MongoDB and Node.js. Developed cart features using React.js and Context API.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
            link: "#"
        },
        {
            title: "Realtime T-shirt Ordering App",
            description: "Frontend web application for real-time ordering. Implemented dynamic T-shirt cards and search functionality. Developed cart and price calculation features.",
            tech: ["React.js", "Context API"],
            link: "#"
        },
        // Add more projects here
    ]

    useEffect(() => {
        const handleScroll = (event: Event) => {
            const targetId = (event.target as HTMLElement).getAttribute('data-target');
            const target = document.getElementById(targetId!);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const buttons = document.querySelectorAll('.scrollButton');
        buttons.forEach(button => {
            button.addEventListener('click', handleScroll);
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', handleScroll);
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center w-full">
                <div className="absolute inset-0">
                    <Canvas className='w-full' camera={{ position: [0, 0, 5] }}>
                        <Suspense fallback={null}>
                            <Scene />
                            <Sparkles count={200} size={5} speed={1} />
                            <Environment preset="city" />
                            <OrbitControls
                                enableZoom={false}
                                autoRotate
                                autoRotateSpeed={0.5}
                            />
                        </Suspense>
                    </Canvas>
                </div>

                <div className="relative z-10 text-center">
                    <motion.h1
                        className="text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Syed Shoeb Uddin
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Frontend Engineer
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button
                            data-target="contact"
                            className="scrollButton bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get in touch
                        </button>
                    </motion.div>
                </div>
            </section>
            {/* Objective Section */}
            <section id="objective" className="py-20 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Objective
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        The candidate is a dedicated undergraduate engineer focusing on frontend development with experience in React.js, Next.js, and styling libraries (ShadCN, Tailwind CSS, Bootstrap). Currently expanding knowledge of MERN stack and seeking an Infosys Instep Internship.
                    </motion.p>
                </div>
            </section>
            {/* Education Section */}
            <section id="education" className="py-20 bg-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Education
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Bachelor of Technology in Computer Science with minor in Data Science (2021-25)
                        <br />
                        Kasireddy Narayanreddy College Of Engineering, Hyderabad
                        <br />
                        CGPA: 7.53
                    </motion.p>
                </div>
            </section>
            {/* Work Experience Section */}
            <section id="work-experience" className="py-20 bg-black">
                <div className="container mx-auto px-4 text-left">
                    <motion.h2
                        className="text-4xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Work Experience
                    </motion.h2>
                    <motion.div
                        className="text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="font-bold">CLEARSPOT.AI (Sep 2024 - Current)</h3>
                        Lead Front-end Developer Intern (Remote - Orlando, Florida)
                        <ul className="list-disc list-inside">
                            <li>Developed web-based solution for Solar Panel monitoring with Drone Technology</li>
                            <li>Created full-stack application using AWS, Python, and Google Cloud Platform</li>
                            <li>Achieved 20% reduction in page load time</li>
                            <li>Worked on cloud technology adoption</li>
                            <li>Used technologies including Next.js, Tailwind CSS, and Docker</li>
                        </ul>
                        <h3 className="font-bold mt-4">TECHPLEMENT (Jun - Jul 2024)</h3>
                        Front-end Intern (Remote - Mumbai, Maharashtra)
                        <ul className="list-disc list-inside">
                            <li>Developed Vanilla JavaScript sites with 20% reduced load time</li>
                            <li>Collaborated on frontend application development using Google Cloud Platform APIs</li>
                            <li>Used HTML, Bootstrap CSS, Vanilla JavaScript, FirebaseDB, and Vercel deployment</li>
                        </ul>
                    </motion.div>
                </div>
            </section>
            {/* Technical Skills Section */}
            <section id="technical-skills" className="py-20 bg-gray-800">
                <div className="container mx-auto px-4 text-left">
                    <motion.h2
                        className="text-4xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.div
                        className="text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <ul className="list-disc list-inside">
                            <li>Languages: C, Python, JavaScript, HTML + CSS</li>
                            <li>Libraries: Bootstrap, Tailwind CSS, Python Libraries, ReactJS</li>
                            <li>Web Dev Tools: VS Code, Git, GitHub</li>
                            <li>Frameworks: Django, Vite, NEXT.js</li>
                            <li>Cloud/Databases: MongoDB, Docker</li>
                        </ul>
                    </motion.div>
                </div>
            </section>
            {/* Projects Section */}
            <Projects projects={projects} />
            {/* Contact Section */}
            <section id="contact" className="py-20 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Let's Connect
                    </motion.h2>
                    <motion.div
                        className="flex justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <a
                            href="mailto:ushoeb25@gmail.com"
                            target='_blank'
                            className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/sd-code-oeb"
                            target='_blank'
                            className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/shoebuddin944"
                            target='_blank'
                            className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
                        >
                            LinkedIn
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ProfileHome;