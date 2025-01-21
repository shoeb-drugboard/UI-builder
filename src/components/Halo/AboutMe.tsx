import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { socialMediaLinks } from '@/assets/data'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'

const AboutMe = () => {
    const router = useRouter();

    return (
        <div className="relative z-20 container mx-auto px-4 py-8 font-poppins overflow-x-hidden">
            <Card className="max-w-4xl mx-auto backdrop-blur-md bg-white/30 border border-white/20 shadow-xl">
                <CardHeader className="text-3xl font-bold px-8 py-6 bg-white/10 border-b border-white/20 flex justify-between items-center">
                    <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        About Me
                    </h1>
                    <button
                        onClick={() => router.push('/3d-profile')}
                        className="px-4 py-2 text-base backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg hover:bg-black/20 hover:border-white/60 transition-all duration-300"
                    >
                        Go Back
                    </button>
                </CardHeader>
                <CardBody className="px-8 py-6 space-y-6 text-lg leading-relaxed text-gray-800">
                    <p>
                        As a passionate frontend developer with a strong foundation in modern web technologies, I thrive on creating responsive and user-friendly interfaces that make a real impact. My journey in tech began during my Computer Science studies at Kasireddy Narayanreddy College of Engineering, where I discovered my love for crafting seamless user experiences through code.
                    </p>
                    <p>
                        Currently leading frontend development projects at CLEARSPOT.AI, I&apos;ve had the opportunity to work on cutting-edge solutions that combine drone technology with solar panel monitoring systems. One of my proudest achievements has been developing a web solution that boosted user interaction by 40% through intuitive interface design and optimized performance.
                    </p>
                    <p>
                        My approach to development is deeply rooted in creating scalable and efficient solutions. Whether it&apos;s reducing page load times by 20% through code optimization or building full-stack applications from the ground up, I believe in writing clean, maintainable code that makes a difference. I&apos;ve honed my skills across the MERN stack, and I&apos;m constantly exploring new technologies to stay at the forefront of web development.
                    </p>
                    <p>
                        Beyond technical skills, I&apos;m passionate about leading and collaborating with teams to solve complex challenges. My experience leading projects in hackathons, including the Megathon by IIIT-HYDERABAD, has taught me the value of combining technical expertise with effective communication and teamwork. Looking ahead, I aim to continue pushing the boundaries of what&apos;s possible in frontend development while contributing to projects that have a meaningful impact on users&apos; lives.
                    </p>
                    <p>
                        When I&apos;m not coding, I enjoy building side projects that solve real-world problems, like my e-commerce solution for a local stationery business. These projects allow me to experiment with new technologies while making a tangible difference in my community. I believe that technology should not just be functional but should create experiences that delight and inspire users.
                    </p>
                </CardBody>
                <CardFooter className="px-8 py-6 flex gap-6 justify-center bg-white/10 border-t border-white/20">
                    {socialMediaLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.id}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/10 border border-white/20 group"
                            >
                                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            </Link>
                        );
                    })}
                </CardFooter>
            </Card>
        </div>)
}

export default AboutMe