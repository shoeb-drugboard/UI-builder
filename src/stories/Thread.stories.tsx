import Thread from "@/components/Thread";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";


type StoryProps = React.ComponentProps<typeof Thread>;

const meta: Meta<StoryProps> = {
    title: "NextUI/Thread",
    component: Thread,
    argTypes: {
        username: {
            control: {
                type: "text"
            }
        },
        avatar: {
            control: {
                type: "text"
            }
        },
        content: {
            control: {
                type: "text"
            }
        },
        timestamp: {
            control: {
                type: "text"
            }
        },
        likes: {
            control: {
                type: "number"
            }
        },
        comments: {
            control: {
                type: "number"
            }
        },
        dark: {
            control: {
                type: "boolean"
            }
        }
    },
    parameters: {
        controls: { expanded: true },
        focus: { expand: true }
    },
    args: {

        username: "John Doe",
        avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
        content: "Hello World",
        timestamp: "2 hours ago",
        likes: 10,
        comments: 5,
        Liked: fn()
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        dark: false
    }
};

export const Dark: Story = {
    args: {
        comments: 49,
        dark: true
    }
};