import { MetricCard } from "@/components/BentoGrid/MetricsCard";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MetricCard> = {
    title: 'Components/MetricCard',
    component: MetricCard,
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['bar', 'line'],
            description: 'Chart type to display',
        },
        color: {
            control: { type: 'color' },
            description: 'Primary color for the chart',
        },
        label: {
            control: 'text',
            description: 'Label displayed above the value',
        },
        value: {
            control: 'text',
            description: 'Main value to display',
        },
        onClick: {
            description: 'Optional click handler',
            action: 'clicked',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '1rem', maxWidth: '320px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

const dummyData = Array.from({ length: 8 }, (_, index) => ({
    value: 40 + Math.random() * 40,
    date: new Date(2024, 0, index + 1).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}));

export const BarChart: Story = {
    args: {
        label: 'PROGRESS',
        value: '56/72',
        data: dummyData,
        color: '#818CF8',
        type: 'bar',
    },
};

export const LineChart: Story = {
    args: {
        label: 'WORKING HOURS',
        value: '35h 12m',
        data: dummyData,
        color: '#F87171',
        type: 'line',
    },
};

export const WithCustomColor: Story = {
    args: {
        label: 'BALANCE',
        value: '$1,234',
        data: dummyData,
        color: '#34D399',
        type: 'bar',
    },
};

export const Interactive: Story = {
    args: {
        label: 'CLICKABLE METRIC',
        value: '789',
        data: dummyData,
        color: '#FBBF24',
        type: 'bar',
        onClick: () => alert('Card clicked!'),
    },
    parameters: {
        docs: {
            description: {
                story: 'This variant shows how to handle click events on the metric card.',
            },
        },
    },
};

export const Loading: Story = {
    args: {
        label: 'LOADING STATE',
        value: '...',
        data: [],
        color: '#818CF8',
        type: 'bar',
    },
    parameters: {
        docs: {
            description: {
                story: 'Example of loading state when data is not yet available.',
            },
        },
    },
};