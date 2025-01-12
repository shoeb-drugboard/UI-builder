import UsersList from "@/components/UsersList";

import { Meta, StoryObj } from "@storybook/react";

type StoryProps = React.ComponentProps<typeof UsersList>;


const meta: Meta<StoryProps> = {
    title: 'NextUI/UsersList',
    component: UsersList,
    argTypes: {
    },

}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        users: [
            { name: 'John Doe', role: 'Admin' },
            { name: 'Jane Smith', role: 'User' },
            { name: 'Bob Johnson', role: 'Editor' },
            { name: 'Shoeb', role: 'Frontend Engineer' },
            { name: 'Shoeb', role: 'Frontend Engineer' },
        ]
    }
};