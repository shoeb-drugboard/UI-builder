// import { cn } from '@/utils/classes'
import React from 'react'
import ProfileCard from './ProfileCard'
import UsersList from './UsersList'
import RechartsDonut from './Rechart'
import InfoCard from './InfoCard'

const GridBento = () => {
    return (
        <div className='bg-zinc-400 border-1 border-zinc-800 max-w-6xl w-full h-screen grid grid-cols-12 grid-flow-dense gap-4 p-4 overflow-scroll'>
            <ProfileCard name='John Doe' role='Admin' className='m-0 overflow-hidden col-span-4 h-full' />
            <RechartsDonut className="items i-2 p-4 bg-white col-span-4 h-max" data={[
                { name: 'Accounting', value: 75000, color: '#4299E1' },
                { name: 'Admin', value: 62500, color: '#9F7AEA' },
                { name: 'Finance', value: 85000, color: '#FF6B6B' },
                { name: 'HR', value: 45000, color: '#1A202C' },
                { name: 'IT Support', value: 38000, color: '#718096' },
                { name: 'Marketing', value: 45000, color: '#F6E05E' }
            ]}
                size={200}
                innerRadius={70}
                outerRadius={80} />
            <UsersList users={[
                { name: 'John Doe', role: 'Admin' },
                { name: 'Jane Smith', role: 'User' },
                { name: 'Bob Johnson', role: 'Editor' },
                { name: 'Shoeb', role: 'Frontend Engineer' },
            ]} className='col-span-4 h-max' />
            <div className="items i-4 p-4 bg-zinc-500 border-1 border-zinc-800 col-span-4 row-span-4" />
            <div className="items i-5 p-4 bg-zinc-500 border-1 border-zinc-800 col-span-8 row-span-4"></div>
            <div className="items i-6 p-4 bg-zinc-500 border-1 border-zinc-800 col-span-12"></div>
            <InfoCard className="items i-7 rounded-lg col-span-4" />
            <InfoCard className="items i-8 rounded-lg col-span-4" colorPrimary='purple-600' colorSecondary='bg-purple-100' />
            <InfoCard className="items i-9 rounded-lg col-span-4" />
        </div>
    )
}

export default GridBento