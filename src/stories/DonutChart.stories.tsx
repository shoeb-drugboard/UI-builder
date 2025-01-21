import type { Meta, StoryObj } from '@storybook/react';
import RechartsDonut from '../components/BentoGrid/RechartsDonut';

const meta: Meta<typeof RechartsDonut> = {
    title: 'Charts/RechartsDonut',
    component: RechartsDonut,
    parameters: {
        layout: 'centered',
        viewport: {
            defaultViewport: 'responsive',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ minHeight: '400px', width: '100%', padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof RechartsDonut>;

const defaultData = [
    { name: 'Cardiology', value: 2500, color: '#FF6B6B' },
    { name: 'Neurology', value: 1800, color: '#4ECDC4' },
    { name: 'Pediatrics', value: 1200, color: '#45B7D1' },
    { name: 'Orthopedics', value: 950, color: '#96CEB4' },
];

const largeData = [
    { name: 'Cardiology', value: 1500000, color: '#FF6B6B' },
    { name: 'Neurology', value: 800000, color: '#4ECDC4' },
    { name: 'Pediatrics', value: 1200000, color: '#45B7D1' },
    { name: 'Orthopedics', value: 950000, color: '#96CEB4' },
];

export const Default: Story = {
    args: {
        data: defaultData,
        size: 300,
    },
    parameters: {
        backgrounds: { default: 'white' },
    },
};

export const SmallDonut: Story = {
    args: {
        data: defaultData,
        size: 200,
        innerRadius: 40,
        outerRadius: 60,
    },
};

export const LargeDonut: Story = {
    args: {
        data: defaultData,
        size: 400,
        innerRadius: 80,
        outerRadius: 120,
    },
};

export const LargeNumbers: Story = {
    args: {
        data: largeData,
        size: 300,
    },
};
