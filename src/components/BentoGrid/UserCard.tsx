import { Button, Card, CardBody, User } from '@nextui-org/react'
import { MailIcon, UserSearch } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';
import { cn } from '@/utils/classes';

type UserCardProps = {
    name?: string,
    role?: string,
    className?: string
}

const UserCard = ({ name = 'Shoeb', role = 'Frontend Engineer', className }: UserCardProps) => {
    return (
        <motion.div className='w-full h-fit'>
            <Card className={cn(`bg-transparent rounded-none shadow-none border-opacity-35 w-full`, className)}>
                <CardBody className='grid grid-cols-12 w-full px-4 py-2 items-center content-center'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='col-span-8'
                    >
                        <User
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            }}
                            description={role}
                            name={name}
                            className='text-black gap-6'
                            classNames={{
                                base: "rounded-lg transition-colors duration-300 ease p-2",
                                wrapper: "group",
                                name: "font-semibold group-hover:text-blue-400",
                                description: "px-0.5 group-hover:text-red-400"
                            }}
                        />
                    </motion.div>
                    <motion.div className='flex gap-2 items-center col-span-4'>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button isIconOnly aria-label='Message me' className='h-10 w-10 rounded-full text-yellow-400 bg-yellow-200 bg-opacity-45 border-yellow-400' variant='bordered'>
                                <MailIcon size={16} />
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button isIconOnly aria-label='Search' className='h-10 w-10 rounded-full text-red-400 bg-red-200 bg-opacity-45 border-red-400' variant='bordered'>
                                <UserSearch size={16} />
                            </Button>
                        </motion.div>
                    </motion.div>
                </CardBody>
            </Card>
        </motion.div>
    )
}

export default UserCard;