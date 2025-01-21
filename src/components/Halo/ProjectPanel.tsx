import React from 'react'
import { projects } from '@/assets/data'
import { Card, CardBody, CardFooter, CardHeader, Chip, Tooltip } from '@nextui-org/react';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils/classes';
const ProjectPanel = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 z-30", className)}>
            <h1 className="text-4xl font-bold text-white mb-8 text-center font-poppins">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card key={project.id} className='bg-black/30 backdrop-blur-sm text-white border border-white/20 hover:scale-105 transition-transform duration-300 font-poppins'>
                        <CardHeader className="flex gap-3">
                            <h3 className='text-2xl font-bold'>{project.name}</h3>
                        </CardHeader>
                        <CardBody>
                            <p className="text-gray-300">{project.description}</p>
                            <div className="flex gap-8 mt-4 px-5">
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all hover:scale-105'
                                >
                                    <Tooltip content='View on GitHub' placement='left' className='text-blue-400 bg-black/90'>
                                        <Github size={20} />
                                    </Tooltip>
                                </Link>
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all hover:scale-105'
                                >
                                    <Tooltip content='View Live' placement='right' className='text-blue-400 bg-black/90'>
                                        <ExternalLink size={20} />
                                    </Tooltip>
                                </Link>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <Chip
                                        key={index}
                                        variant='bordered'
                                        className='backdrop-blur-sm bg-white/10 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.15)] text-white'
                                    >
                                        {tech}
                                    </Chip>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Link
                    href="/3d-profile"
                    className="px-6 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 
                    text-white hover:bg-white/20 transition-all duration-300 font-poppins
                    hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] 
                    hover:border-white/40 active:scale-95"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default ProjectPanel