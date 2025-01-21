import type { Meta, StoryObj } from '@storybook/react';
import Earth from '../components/Three/Earth';

const meta = {
    title: 'Three.js/Earth',
    component: Earth,
    tags: ['autodocs'],
} satisfies Meta<typeof Earth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    }
};

export const CustomSize: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ height: '500px', width: '500px' }}>
                <Story />
            </div>
        ),
    ],
};
