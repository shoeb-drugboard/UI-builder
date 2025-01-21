import UserCard from "@/components/BentoGrid/UserCard";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

type StoryProps = React.ComponentProps<typeof UserCard>;


const meta: Meta<StoryProps> = {
    title: "Components/UserCard",
    component: UserCard,
    argTypes: {
        name: {
            control: {
                type: "text"
            }
        },
        role: {
            control: {
                type: "text"
            }
        }
    }
}

export default meta;

type Story = StoryObj<StoryProps>;
export const Default: Story = {
    args: {
        name: "Shoeb",
        role: "Frontend Engineer",
        className: "bg-white rounded-md shadow-md max-w-[360px] w-full"
    }
}

