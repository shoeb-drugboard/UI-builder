import CommentSection from "@/components/Comments";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type StoryProps = React.ComponentProps<typeof CommentSection>;


const meta: Meta<StoryProps> = {
    title: "NextUI/CommentSection",
    component: CommentSection,
    argTypes: {
        comments: {
            control: {
                type: "object"
            }
        },
    },
    parameters: {
        controls: { expanded: true },
        layout: "centered"
    },
    args: {
        clicked: true,
        comments: [{
            "user": "Shoeb",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "content": "Hi, I am Shoeb",
            "timestamp": "3 hours ago"
        }, {
            "user": "Uddin",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "content": "Hi, I am Uddin",
            "timestamp": "2 hours ago"
        }],
    }
}
export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        onAddComment: fn(),
    },
}

export const NoCommments: Story = {
    args: {
        clicked: false,
    }
}