import React from 'react'
import Link from 'next/link';
import { cn } from '@/utils/classes';
import { Tooltip } from '@nextui-org/react';
import { navigationLinks } from '@/assets/data';

const Navigation = ({ className }: { className?: string }) => {
    const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        const downloadAnchor = document.createElement('a');
        downloadAnchor.href = link;
        downloadAnchor.download = 'resume.pdf';
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
    };

    return (
        <div className={cn('group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-spin-slow hover:[animation-play-state:paused]', className)}>
            {navigationLinks.map((link, idx) => {
                const angle = (idx * 2 * Math.PI) / navigationLinks.length;
                const radius = 15; // rem
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <Tooltip
                        key={link.id}
                        content={link.name || 'Navigation Link'}
                        placement='top'
                        className='bg-black/30'
                        classNames={{
                            base: "backdrop-blur-md bg-black/30 shadow-lg shadow-black/30 rounded-full",
                            content: "text-white px-4 py-2 text-sm"
                        }}
                    >
                        <Link
                            key={link.id}
                            href={link.link}
                            download={link.download}
                            onClick={(e) => link.download && handleDownloadClick(e, link.link)}
                            className='absolute backdrop-blur-md bg-black/30 text-white rounded-full p-4 cursor-pointer transition-all duration-300 hover:bg-white/70 hover:text-black hover:scale-105 shadow-lg shadow-black/50 border border-white/20'
                            style={{
                                transform: `translate(${x}rem, ${y}rem)`,
                            }}
                        >
                            <span className='relative'>
                                {React.createElement(link.icon, {
                                    className: 'animate-spin-slow-reverse group-hover:[animation-play-state:paused]'
                                } as React.SVGProps<SVGSVGElement>)}
                            </span>
                        </Link>
                    </Tooltip>
                )
            })}
        </div>
    )
}

export default Navigation