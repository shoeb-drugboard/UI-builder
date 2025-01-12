import React from "react";
import Post from "@/components/Post";
import { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/dom";
import { expect, userEvent } from "@storybook/test";


type StoryProps = React.ComponentProps<typeof Post>;

const meta: Meta<StoryProps> = {
    title: "NextUI/Post",
    component: Post,
    argTypes: {
        dark: {
            control: 'boolean'
        },
        Commented: {
            control: {
                type: 'select',
                options: ['open', 'closed']
            }
        },
    },
    parameters: {
        controls: { expanded: true },
        focus: { expand: true }
    },
    args: {
        username: "Shoeb",
        avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
        content: "Hi, I am Shoeb",
        timestamp: "3 hours ago",
        likes: 0,
        Commented: 'closed'
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        dark: false
    },
}

export const WithCommentsOpen: Story = {
    args: {
        dark: false,
        Commented: 'open'
    }
}

export const DarkModeWithComments: Story = {
    args: {
        dark: true,
        Commented: 'open'
    },
    play: async (context) => {
        const canvas = context.canvasElement;
        const post = canvas.querySelector('.post');
        if (post) {
            post.classList.add('dark');
        }
    }
}

export const LikeInteraction: Story = {
    args: {
        dark: false,
        likes: 5
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const likeButton = await canvas.findByText('5');
        await userEvent.click(likeButton);
        await expect(canvas.getByText('6')).toBeInTheDocument();
        await userEvent.click(likeButton);
        await expect(canvas.getByText('5')).toBeInTheDocument();
    }
};

export const CommentInteraction: Story = {
    args: {
        dark: false,
        Commented: 'closed'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const commentButton = await canvas.findByText('Comments');
        await userEvent.click(commentButton);

        const commentInput = await canvas.findByPlaceholderText('Write a comment...');
        await userEvent.type(commentInput, 'Test comment{enter}');

        await expect(canvas.getByText('Test comment')).toBeInTheDocument();
        await expect(canvas.getByText('Just now')).toBeInTheDocument();
    }
};

export const DarkModeFullInteraction: Story = {
    args: {
        dark: true,
        likes: 10,
        Commented: 'open'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const likeButton = await canvas.findByText('10');
        await userEvent.click(likeButton);

        const commentInput = await canvas.findByPlaceholderText('Write a comment...');
        await userEvent.type(commentInput, 'Dark mode comment test{enter}');


        await expect(canvas.getByText('11')).toBeInTheDocument();
        await expect(canvas.getByText('Dark mode comment test')).toBeInTheDocument();
    }
};

export const MultipleCommentsTest: Story = {
    args: {
        dark: false,
        Commented: 'open'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const commentInput = await canvas.findByPlaceholderText('Write a comment...');

        // Add multiple comments
        const comments = ['First comment', 'Second comment', 'Third comment'];
        for (const comment of comments) {
            await userEvent.type(commentInput, comment + '{enter}');
        }

        // Verify all comments are present
        for (const comment of comments) {
            await expect(canvas.getByText(comment)).toBeInTheDocument();
        }
    }
};


