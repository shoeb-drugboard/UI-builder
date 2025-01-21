import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TimeTrackingChart from '../components/BentoGrid/TimeTrackingChart';

const meta: Meta<typeof TimeTrackingChart> = {
    title: 'Charts/TimeTrackingChart',
    component: TimeTrackingChart,
    decorators: [
        (Story) => (
            <div className="w-[800px] h-[400px] p-4 bg-white">
                {Story()}
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#f5f5f5' },
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof TimeTrackingChart>;

const mockData = [
    { date: '2024-01-01', timeClocked: 8, budgetRemain: 40 },
    { date: '2024-01-02', timeClocked: 6, budgetRemain: 34 },
    { date: '2024-01-03', timeClocked: 7, budgetRemain: 27 },
    { date: '2024-01-04', timeClocked: 8, budgetRemain: 19 },
    { date: '2024-01-05', timeClocked: 5, budgetRemain: 14 },
];

export const Default: Story = {
    render: (args) => <TimeTrackingChart {...args} />,
    args: {
        data: mockData,
        totalTracked: 34,
        totalRemaining: 14,
    },
};

export const EmptyData: Story = {
    args: {
        data: [],
        totalTracked: 0,
        totalRemaining: 48,
    },
};

export const HighUsage: Story = {
    args: {
        data: mockData.map(item => ({
            ...item,
            timeClocked: item.timeClocked * 2,
            budgetRemain: Math.max(0, item.budgetRemain - 10)
        })),
        totalTracked: 68,
        totalRemaining: 4,
    },
};

export const LongPeriod: Story = {
    args: {
        data: [
            ...mockData,
            { date: '2024-01-06', timeClocked: 6, budgetRemain: 8 },
            { date: '2024-01-07', timeClocked: 7, budgetRemain: 1 },
            { date: '2024-01-08', timeClocked: 4, budgetRemain: 0 },
        ],
        totalTracked: 51,
        totalRemaining: 0,
    },
};
