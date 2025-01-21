import type { Meta, StoryObj } from '@storybook/react';
import ChatCard from '../components/BentoGrid/ChatCard';

const meta: Meta<typeof ChatCard> = {
    title: 'Layout/ChatCard',
    component: ChatCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional CSS classes',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ChatCard>;

export const Default: Story = {
    args: {},
};

export const CustomStyle: Story = {
    args: {
        className: 'max-w-3xl bg-gray-50 p-4 rounded-2xl',
    },
};
