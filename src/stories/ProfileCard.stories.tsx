import ProfileCard from "@/components/ProfileCard";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = React.ComponentProps<typeof ProfileCard>;


const meta: Meta<StoryProps> = {
    title: 'NextUI/ProfileCard',
    component: ProfileCard,
    argTypes: {
        className: {
            control: 'text'
        },
        name: {
            control: 'text'
        },
        role: {
            control: 'text'
        }
    },

}

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        name: 'Shoeb Uddin',
        role: 'Frontend Engineer'
    }
};

export const Admin: Story = {
    args: {
        name: 'Admin',
        role: 'Admin'
    }
}