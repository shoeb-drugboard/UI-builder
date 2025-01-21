import { Button } from '@nextui-org/react'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import UserCard from './UserCard'
import { motion } from 'framer-motion';
import { cn } from '@/utils/classes'
type UsersListProps = {
    users: Array<{ name: string, role: string }>,
    className?: string
}
const UsersList = ({ users = [
    { name: 'John Doe', role: 'Admin' },
    { name: 'Jane Smith', role: 'User' },
    { name: 'Bob Johnson', role: 'Editor' },
    { name: 'Shoeb', role: 'Frontend Engineer' },
    { name: 'Shoeb', role: 'Frontend Engineer' },
], className }: UsersListProps) => {
    return (
        <div className={cn('w-full h-fit', className)}>
            <div className={cn('grid grid-rows-12 space-y-[11.5px] bg-white rounded-lg p-4')}>
                <div className='max-h-[250px] w-[100%] row-span-10 gap-1 overflow-y-scroll scrollbar-hide md:w-[90%]'>
                    {
                        users.map((user, index) => (
                            <>
                                <UserCard key={index} name={user.name} role={user.role} className='' />
                                <motion.hr
                                    initial={{ width: 0 }}
                                    animate={{ width: "75%" }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className='ml-auto w-full'
                                />
                            </>
                        ))
                    }
                </div>
                <Button className='row-span-2 bg-warning text-white rounded-md w-[200px] h-10 place-self-center'>
                    <span>Add new User</span> <PlusIcon size={24} className='p-0 m-0' />
                </Button>
            </div>
        </div>

    )
}

export default UsersList