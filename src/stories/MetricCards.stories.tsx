import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MetricCards from '@/components/BentoGrid/MetricsCard';

const meta: Meta<typeof MetricCards> = {
    title: 'Layout/MetricCards',
    component: MetricCards,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onCardClick: {
            description: 'Callback when a card is clicked',
            action: 'clicked'
        }
    },
    args: {
        className: 'text-gray-900',
    }
};

export default meta;

type Story = StoryObj<typeof MetricCards>;

// Sample data generators
const generateProgressData = () => Array.from({ length: 8 }, (_, i) => ({
    value: 40 + Math.random() * 40,
    date: new Date(2024, 0, i + 1).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}));

const generateHoursData = () => Array.from({ length: 8 }, (_, i) => ({
    value: 20 + Math.random() * 30,
    date: new Date(2024, 0, i + 1).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}));

const generateBalanceData = () => Array.from({ length: 8 }, (_, i) => ({
    value: 30 + Math.random() * 30,
    date: new Date(2024, 0, i + 1).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}));

export const Default: Story = {
    args: {
        fraction: '56/72',
        workingHours: '35h 12m',
        balanceDate: '24th Apr',
        progressData: generateProgressData(),
        workingHoursData: generateHoursData(),
        balanceData: generateBalanceData(),
        onCardClick: action('card-clicked'),
    },
};

export const WithCustomData: Story = {
    args: {
        fraction: '90/100',
        workingHours: '40h 00m',
        balanceDate: '30th Apr',
        progressData: generateProgressData().map(d => ({ ...d, value: d.value * 1.2 })),
        workingHoursData: generateHoursData().map(d => ({ ...d, value: d.value * 1.5 })),
        balanceData: generateBalanceData().map(d => ({ ...d, value: d.value * 1.3 })),
        onCardClick: action('custom-data-card-clicked')
    },
};

export const WithClickHandler: Story = {
    args: {
        ...Default.args,
        onCardClick: (type) => {
            action('card-clicked')(type);
            console.log(`Clicked on ${type} card`);
        },
    },
};

export const CustomClassName: Story = {
    args: {
        ...Default.args,
        className: 'bg-gray-900 text-yellow-500 transition-colors hover:bg-yellow-500 hover:text-gray-900',
    },
};
