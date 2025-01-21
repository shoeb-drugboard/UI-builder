import { cn } from '@/utils/classes';
import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    TooltipProps
} from 'recharts';

interface MetricCardProps {
    fraction?: string;
    workingHours?: string;
    balanceDate?: string;
    className?: string;
    progressData?: Array<{ value: number; date: string }>;
    workingHoursData?: Array<{ value: number; date: string }>;
    balanceData?: Array<{ value: number; date: string }>;
    onCardClick?: (type: 'progress' | 'hours' | 'balance') => void;
}
const generateDummyData = (count: number, min: number, max: number) => {
    return Array.from({ length: count }, (_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (count - index - 1));
        return {
            value: min + Math.random() * (max - min),
            date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        };
    });
};
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg">
                <p className="text-xs font-medium">{label}</p>
                <p className="text-sm font-bold">{payload[0]?.value?.toFixed(1)}</p>
            </div>
        );
    }
    return null;
};

export const MetricCard: React.FC<{
    label: string;
    value: string;
    data: Array<{ value: number; date: string }>;
    color: string;
    type?: 'bar' | 'line';
    onClick?: () => void;
    className?: string;
}> = ({ label, value, data, color, type = 'bar', onClick, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={cn(`flex flex-col text-black bg-white gap-2 p-4 rounded-lg transition-all duration-300 ${isHovered ? 'bg-gray-50' : ''} cursor-pointer`, className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <span className={`text-xs font-medium text-center md:text-sm ${isHovered ? "text-blue-800" : ""}`}>{label}</span>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <span className={`text-sm font-bold transition-colors duration-300 md:text-md lg:text-xl ${isHovered ? 'text-blue-600' : ''
                    }`}>{value}</span>
                <div className="w-24 h-8">
                    <ResponsiveContainer width="100%" height="100%">
                        {type === 'bar' ? (
                            <BarChart data={data}>
                                <Tooltip
                                    content={<CustomTooltip />}
                                    cursor={{ fill: 'rgba(100, 116, 139, 0.1)' }}
                                />
                                <Bar
                                    dataKey="value"
                                    fill={color}
                                    radius={[2, 2, 0, 0]}
                                    opacity={isHovered ? 1 : 0.8}
                                />
                            </BarChart>
                        ) : (
                            <LineChart data={data}>
                                <Tooltip
                                    content={<CustomTooltip />}
                                    cursor={{ stroke: 'rgba(100, 116, 139, 0.1)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={color}
                                    strokeWidth={isHovered ? 3 : 2}
                                    dot={isHovered}
                                    activeDot={{ r: 4 }}
                                />
                            </LineChart>
                        )}
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

const MetricCards: React.FC<MetricCardProps> = ({
    fraction = "56/72",
    workingHours = "35h 12m",
    balanceDate = "24th Apr",
    className = "",
    progressData = generateDummyData(8, 40, 80),
    workingHoursData = generateDummyData(8, 20, 50),
    balanceData = generateDummyData(8, 30, 60),
    onCardClick
}) => {

    return (
        <div className={cn(`bg-white rounded-xl shadow-sm p-6 w-full`, className)}>
            <div className="grid grid-cols-12 gap-4 ml-auto w-full">
                <MetricCard
                    label="PROGRESS"
                    value={fraction}
                    data={progressData}
                    color="#818CF8"
                    type="bar"
                    onClick={() => onCardClick?.('progress')}
                    className='col-span-4'
                />

                <MetricCard
                    label="TOTAL WORKING HOURS"
                    value={workingHours}
                    data={workingHoursData}
                    color="#F87171"
                    type="line"
                    onClick={() => onCardClick?.('hours')}
                    className='col-span-4'
                />

                <MetricCard
                    label="BALANCE MONEY"
                    value={balanceDate}
                    data={balanceData}
                    color="#FBBF24"
                    type="bar"
                    onClick={() => onCardClick?.('balance')}
                    className='col-span-4'
                />
            </div>
        </div>
    );
};

export default MetricCards;