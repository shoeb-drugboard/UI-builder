import React from 'react';

// Define our data structure for segments
interface Segment {
    name: string;
    value: number;
    color: string;
}

interface SegmentedDonutChartProps {
    segments?: Segment[];  // Make segments optional
    size?: number;
    strokeWidth?: number;
    title?: string;
}

const SegmentedDonutChart: React.FC<SegmentedDonutChartProps> = ({
    segments = [
        { name: 'Segment 1', value: 30, color: '#60A5FA' },
        { name: 'Segment 2', value: 40, color: '#34D399' },
        { name: 'Segment 3', value: 20, color: '#F87171' }
    ],
    size = 200,
    strokeWidth = 20,
    title = 'Total'
}) => {
    // Calculate total for percentages
    const total = (segments || []).reduce((sum, segment) => sum + segment.value, 0);

    // Calculate dimensions
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // Format large numbers
    const formatValue = (value: number): string => {
        if (value >= 1000000) {
            return `${(value / 1000000).toFixed(1)}M`;
        }
        if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}k`;
        }
        return value.toString();
    };

    // Calculate stroke dasharray and dashoffset for each segment
    let currentOffset = 0;
    const segmentElements = (segments || []).map((segment) => {
        const percentage = (segment.value / total) * 100;
        const dashArray = (percentage / 100) * circumference;
        const element = (
            <circle
                key={segment.name}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                stroke={segment.color}
                fill="none"
                strokeLinecap="round"
                style={{
                    strokeDasharray: `${dashArray} ${circumference}`,
                    strokeDashoffset: -currentOffset,
                    transition: 'stroke-dashoffset 0.5s ease-in-out',
                }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
        );
        currentOffset += dashArray;
        return element;
    });

    return (
        <div className="inline-flex flex-col items-center gap-6">
            {/* Chart */}
            <div className="relative">
                <svg
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    className="transform"
                >
                    {/* Background circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        className="stroke-gray-100"
                        fill="none"
                    />
                    {/* Segments */}
                    {segmentElements}
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-bold text-gray-900">
                        {formatValue(total)}
                    </span>
                    <span className="text-sm text-gray-500">{title}</span>
                </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {(segments || []).map((segment) => (
                    <div key={segment.name} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3"
                            style={{ backgroundColor: segment.color }}
                        />
                        <span className="text-gray-700">{segment.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SegmentedDonutChart;