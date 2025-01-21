import React from 'react';
import Logo from '@/public/logo.svg';
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div className='grid grid-cols-3 justify-between items-center h-16'>
            <motion.div
                className="logo flex justify-start items-center pl-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Image src={Logo} alt='Logo' height={30} width={30} />
                <h1 className='capitalize text-2xl'>Renith</h1>
            </motion.div>
            <div className="links grid place-items-center">
                <ul className='flex gap-6'>
                    {['Product', 'Services', 'Team', 'Blog', 'Contact'].map((text, index) => (
                        <li key={index}>
                            <motion.div
                                whileHover={{ scale: 0.99 }}
                                whileTap={{ scale: 0.88 }}
                            >
                                <Link href="#" underline="hover" className='text-white'>
                                    {text}
                                </Link>
                            </motion.div>
                        </li>
                    ))}
                </ul>
            </div>
            <motion.div
                className="btns gap-6 flex justify-center items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Button className='rounded-full' variant='bordered'>Login</Button>
                <Button className='rounded-full bg-white'>Signup</Button>
            </motion.div>
        </div>
    );
}

export default Header;