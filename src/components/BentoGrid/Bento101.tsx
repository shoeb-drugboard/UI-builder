import React from 'react';
import ChatCard from './ChatCard';
import InfoCard from './InfoCard';
import UsersList from './UsersList';
import { motion } from 'framer-motion';
import RechartsDonut from './RechartsDonut';
import ProfileCard from './ProfileCard';
import MetricCards from './MetricsCard';
import TimeTrackingChart from './TimeTrackingChart';

const BentoGrid: React.FC = () => {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: (i: number) => ({
            x: i % 2 === 0 ? 100 : -100,
            opacity: 0
        }),
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8
            }
        }
    };

    const progressData = [
        { value: 45, date: 'Mar 1' },
        { value: 52, date: 'Mar 2' },
        { value: 49, date: 'Mar 3' },
        { value: 60, date: 'Mar 4' },
        { value: 56, date: 'Mar 5' },
        { value: 58, date: 'Mar 6' }
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={(`bg-[hsl(36,100%,99%)] w-full max-w-[1500px] h-full max-h-[1080px] m-auto p-[2vw] grid grid-cols-6 gap-[1.5vw] font-poppins overflow-y-auto overflow-x-hidden xs:[grid-template-areas:'box1_box1_box1_box1_box1_box1'_'box2_box2_box2_box2_box2_box2'_'box3_box3_box3_box3_box3_box3'_'box4_box4_box4_box4_box4_box4'_'box5_box5_box5_box5_box5_box5'_'box6_box6_box6_box6_box6_box6'_'box7_box7_box7_box7_box7_box7'_'box8_box8_box8_box8_box8_box8'_'box9_box9_box9_box9_box9_box9'] sm:[grid-template-areas:'box1_box1_box1_box1_box1_box1'_'box2_box2_box2_box2_box2_box2'_'box3_box3_box3_box3_box3_box3'_'box4_box4_box4_box4_box4_box4'_'box5_box5_box5_box5_box5_box5'_'box6_box6_box6_box6_box6_box6'_'box7_box7_box7_box7_box7_box7'_'box8_box8_box8_box8_box8_box8'_'box9_box9_box9_box9_box9_box9'] md:[grid-template-areas:'box1_box1_box1_box2_box2_box2'_'box4_box4_box4_box2_box2_box2'_'box4_box4_box4_box3_box3_box3'_'box4_box4_box4_box3_box3_box3'_'box5_box5_box5_box5_box5_box5'_'box5_box5_box5_box5_box5_box5'_'box6_box6_box6_box6_box6_box6'_'box7_box7_box7_box8_box8_box8'_'box7_box7_box7_box8_box8_box8'_'box9_box9_box9_box9_box9_box9'] lg:[grid-template-areas:'box1_box1_box1_box2_box2_box2'_'box4_box4_box4_box2_box2_box2'_'box4_box4_box4_box3_box3_box3'_'box4_box4_box4_box3_box3_box3'_'box5_box5_box5_box5_box5_box5'_'box5_box5_box5_box5_box5_box5'_'box6_box6_box6_box6_box6_box6'_'box7_box7_box7_box8_box8_box8'_'box7_box7_box7_box8_box8_box8'_'box9_box9_box9_box9_box9_box9'] xl:[grid-template-areas:'box1_box1_box2_box2_box3_box3'_'box4_box4_box2_box2_box3_box3'_'box4_box4_box5_box5_box5_box5'_'box4_box4_box5_box5_box5_box5'_'box4_box4_box5_box5_box5_box5'_'box6_box6_box6_box6_box6_box6'_'box7_box7_box8_box8_box9_box9'_'box7_box7_box8_box8_box9_box9'_'box7_box7_box8_box8_box9_box9']`)}
        >
            <motion.div custom={1} variants={itemVariants} className="[grid-area:box1]">
                <ProfileCard name='shoeb' role='Engineer' />
            </motion.div>

            <motion.div custom={2} variants={itemVariants} className="[grid-area:box2]">
                <RechartsDonut size={200} data={[
                    { name: 'Accounting', value: 75000, color: '#4299E1' },
                    { name: 'Admin', value: 62500, color: '#9F7AEA' },
                    { name: 'Finance', value: 85000, color: '#FF6B6B' },
                    { name: 'HR', value: 45000, color: '#1A202C' },
                    { name: 'IT Support', value: 38000, color: '#718096' },
                    { name: 'Marketing', value: 45000, color: '#F6E05E' }
                ]} className='w-full' />
            </motion.div>

            <motion.div custom={3} variants={itemVariants} className="[grid-area:box3]">
                <UsersList users={[
                    { name: 'John Doe', role: 'Administrator' },
                    { name: 'Jane Smith', role: 'User' },
                    { name: 'Bob Johnson', role: 'Editor' },
                    { name: 'Shoeb', role: 'Frontend Engineer' },
                    { name: 'Shoeb', role: 'Frontend Engineer' },
                ]} className='shadow-lg rounded-lg' />
            </motion.div>

            <motion.div custom={4} variants={itemVariants} className="[grid-area:box4]">
                <ChatCard className='shadow-lg rounded-lg' />
            </motion.div>

            <motion.div custom={5} variants={itemVariants} className="[grid-area:box5]">
                <TimeTrackingChart data={[
                    { date: '2021-03-13', timeClocked: 35, budgetRemain: 10 },
                    { date: '2021-03-14', timeClocked: 20, budgetRemain: 12 },
                    { date: '2021-03-15', timeClocked: 40, budgetRemain: 20 },
                    { date: '2021-03-16', timeClocked: 25, budgetRemain: 18 },
                    { date: '2021-03-17', timeClocked: 15, budgetRemain: 15 },
                    { date: '2021-03-18', timeClocked: 10, budgetRemain: 10 }
                ]} />
            </motion.div>

            <motion.div custom={6} variants={itemVariants} className="[grid-area:box6]">
                <MetricCards
                    fraction="56/72"
                    workingHours="35h 12m"
                    balanceDate="24th Apr"
                    progressData={progressData}
                    className='shadow-lg'
                />
            </motion.div>

            <motion.div custom={7} variants={itemVariants} className="[grid-area:box7]">
                <InfoCard btnDesc="Go to Link" colorPrimaryText='text-orange-500' colorPrimaryBtn='bg-orange-500' colorSecondary='bg-orange-100' heading="Magage Task" task='42 tasks' className='shadow-lg rounded-lg h-max p-4 w-full' />

            </motion.div>

            <motion.div custom={8} variants={itemVariants} className="[grid-area:box8] mb-4">
                <InfoCard btnDesc="Go to Link" colorPrimaryText='text-purple-600' colorPrimaryBtn='bg-purple-600' colorSecondary='bg-purple-100' heading="Magage Task" task='42 tasks' className='shadow-lg rounded-lg h-max p-4 w-full' />

            </motion.div>

            <motion.div custom={9} variants={itemVariants} className="[grid-area:box9] mb-4">
                <InfoCard btnDesc="Go to Link" colorPrimaryText='text-yellow-500' colorPrimaryBtn='bg-yellow-500' colorSecondary='bg-yellow-100' heading="Magage Task" task='42 tasks' className='shadow-lg rounded-lg h-max p-4 w-full' />
            </motion.div>
        </motion.div>
    );
};

export default BentoGrid;