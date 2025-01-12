import { cn } from '@/utils/classes';
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface Department {
    name: string;
    value: number;
    color: string;
}

interface RechartsDonutProps {
    data: Department[];
    size?: number;
    innerRadius?: number;
    outerRadius?: number;
    className?: string;
}

const RechartsDonut: React.FC<RechartsDonutProps> = ({
    data,
    size,
    className,
    innerRadius = 60,
    outerRadius = 80,
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const total = data.reduce((sum, entry) => sum + entry.value, 0);

    const formatValue = (value: number): string => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
        return value.toString();
    };

    const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: Department }> }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-2 shadow-lg rounded-lg border">
                    <p className="text-sm font-medium">{data.name}</p>
                    <p className="text-sm text-gray-600">{formatValue(data.value)}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={cn("grid content-center justify-center gap-2 container mx-auto bg-white w-full p-4 rounded-lg shadow-lg", className)}>
            <div className="relative" style={{ width: size, height: size }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={innerRadius}
                            outerRadius={outerRadius}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={2}
                            onMouseEnter={(_, index) => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={entry.name}
                                    fill={entry.color}
                                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.7}
                                    strokeWidth={activeIndex === index ? 2 : 0}
                                    stroke="#fff"
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-bold text-gray-900">
                        {formatValue(total)}
                    </span>
                    <span className="text-sm text-gray-500">Total</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm space-y-2 items-center content-center">
                {data.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-gray-700">{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RechartsDonut;