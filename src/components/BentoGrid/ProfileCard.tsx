import React from 'react'
import Image from 'next/image'
import { Dot } from 'lucide-react';
import { cn } from '@/utils/classes';
import { motion } from 'framer-motion';
import img from '../../../public/img-dash.png';
import { Button, Card, CardBody } from '@nextui-org/react';

interface ProfileCardProps {
    className?: string,
    name?: string | "John Doe",
    role?: string | "Software Engineer"
}

const ProfileCard: React.FC<ProfileCardProps> = ({ className, name, role }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className={cn('w-full h-fit')}
        >
            <Card className={cn(`grid grid-cols-12 bg-white p-4 rounded-lg shadow-md h-32 w-full font-poppins relative`, className)} >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className='col-span-4 rounded-full overflow-hidden flex justify-center items-center'
                >
                    <Image src={img} alt='profile' className='rounded-full' width={80} height={80} />
                </motion.div>
                <CardBody className="col-span-8 grid grid-flow-row content-center justify-start">
                    <h1 className='font-semibold text-2xl p-0'>{name}</h1>
                    <p className='text-slate-400 font-semibold text-[11.5px] px-0.5 uppercase'>{role}</p>
                </CardBody>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='absolute top-2 right-2 flex bg-transparent gap-0 translate-x-7 -translate-y-2'
                >
                    <Button className='bg-transparent p-0'>
                        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                            <Dot size={24} className='p-0 m-0 text-slate-400' />
                            <Dot size={24} className='p-0 m-0 text-slate-400 -translate-x-3' />
                        </motion.div>
                    </Button>
                </motion.div>
            </Card>
        </motion.div>
    )
}

export default ProfileCard