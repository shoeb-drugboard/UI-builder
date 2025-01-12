import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

interface TimeTrackingData {
    date: string;
    timeClocked: number;
    budgetRemain: number;
}

interface TimeTrackingChartProps {
    data: TimeTrackingData[];
    totalTracked?: number;
    totalRemaining?: number;
}

const TimeTrackingChart: React.FC<TimeTrackingChartProps> = ({
    data,
    totalTracked = 100,
    totalRemaining = 100
}) => {
    // Simple date formatting utility
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = date.getDate().toString().padStart(2, '0');
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return {
            short: `${day} ${month}`,
            full: `${day} ${month}, ${year}`
        };
    };

    // Custom tooltip component
    const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { color: string; name: string; value: number; }[]; label?: string; }) => {
        if (active && payload && payload.length && label) {
            const formattedDate = formatDate(label);
            return (
                <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg">
                    <p className="text-sm font-medium mb-1">
                        {formattedDate.full}
                    </p>
                    {payload.map((entry: { color: string; name: string; value: number; }, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: entry.color }}
                            />
                            <span>{entry.name === 'timeClocked' ? 'Time clocked' : 'Budget remain'}:</span>
                            <span className="font-medium">{entry.value}h</span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    // Format date for X-axis
    const formatXAxis = (dateString: string) => {
        return formatDate(dateString).short;
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-lg m-auto">
            <h2 className="text-xl font-semibold mb-6 text-black">Time track</h2>
            <div className="h-max">
                <ResponsiveContainer width="100%" height={100}>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="timeGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="budgetGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6B46C1" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#6B46C1" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="date"
                            tickFormatter={formatXAxis}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip content={<CustomTooltip />} />

                        <Area
                            type="monotone"
                            dataKey="timeClocked"
                            stroke="#FF6B6B"
                            fill="url(#timeGradient)"
                            strokeWidth={2}
                            name="Time Estimation"
                        />
                        <Area
                            type="monotone"
                            dataKey="budgetRemain"
                            stroke="#6B46C1"
                            fill="url(#budgetGradient)"
                            strokeWidth={2}
                            name="Budget"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-6 flex-col sm:flex-row">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
                        <span className="text-sm text-gray-600">Time Estimation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#6B46C1]" />
                        <span className="text-sm text-gray-600">Budget</span>
                    </div>
                </div>

                <div className="flex flex-col gap-6 text-sm sm:flex-row">
                    <div className='flex justify-between w-[120px]'>
                        <span className="text-gray-400">Remaining </span>
                        <span className="font-medium text-slate-600">{totalRemaining}h</span>
                    </div>
                    <div className='flex justify-between w-[120px]'>
                        <span className="text-gray-400">Tracked </span>
                        <span className="font-medium text-slate-600">{totalTracked}h</span>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                    See full report →
                </button>
            </div>
        </div>
    );
};

export default TimeTrackingChart;