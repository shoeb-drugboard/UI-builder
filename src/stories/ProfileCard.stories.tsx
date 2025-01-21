import ProfileCard from "@/components/BentoGrid/ProfileCard";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = React.ComponentProps<typeof ProfileCard>;


const meta: Meta<StoryProps> = {
    title: 'Layout/ProfileCard',
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
    args: {
        className: "max-w-xl"
    }

}

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        name: 'Shoeb Uddin',
        role: 'Frontend Engineer',
        className: "max-w-xl mx-4 text-black"
    }
};

export const Admin: Story = {
    args: {
        name: 'Admin',
        role: 'Admin'
    }
}