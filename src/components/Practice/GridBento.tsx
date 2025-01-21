// import { cn } from '@/utils/classes'
import React from 'react'
import ProfileCard from '../BentoGrid/ProfileCard'
import UsersList from '../BentoGrid/UsersList'
import RechartsDonut from '../BentoGrid/RechartsDonut'
import InfoCard from '../BentoGrid/InfoCard'
import ChatCard from '../BentoGrid/ChatCard'
import MetricCards from '../BentoGrid/MetricsCard'
import TimeTrackingChart from '../BentoGrid/TimeTrackingChart'

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
            <ChatCard className="items i-4 p-4 col-span-4 row-span-4" />
            <TimeTrackingChart data={[
                { date: '2021-03-13', timeClocked: 35, budgetRemain: 10 },
                { date: '2021-03-14', timeClocked: 20, budgetRemain: 12 },
                { date: '2021-03-15', timeClocked: 40, budgetRemain: 20 },
                { date: '2021-03-16', timeClocked: 25, budgetRemain: 18 },
                { date: '2021-03-17', timeClocked: 15, budgetRemain: 15 },
                { date: '2021-03-18', timeClocked: 10, budgetRemain: 10 }
            ]} />
            <MetricCards className="items i-6 p-4 col-span-12" />
            <InfoCard className="items i-7 rounded-lg col-span-4" />
            <InfoCard className="items i-8 rounded-lg col-span-4" colorPrimary='purple-600' colorSecondary='bg-purple-100' />
            <InfoCard className="items i-9 rounded-lg col-span-4" />
        </div>
    )
}

export default GridBento