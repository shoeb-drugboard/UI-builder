import StoryList from "@/components/StoryList";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from '@storybook/test';
import React from "react";

type StoryProps = React.ComponentProps<typeof StoryList>;

const meta: Meta<StoryProps> = {
    title: "NextUI/StoryList",
    component: StoryList,
    argTypes: {
        stories: {
            control: {
                type: "object"
            }
        }
    },
    parameters: {
        controls: { expanded: true }
    },
}

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        orientation: "horizontal",
        stories: [{
            "user": "Shoeb",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": true
        }, {
            "user": "Uddin",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": false
        }, {
            "user": "Shoeb Uddin",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": false
        }, {
            "user": "Uddin Shoeb",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": true
        }, {
            "user": "Shoeb Uddin",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": false
        }, {
            "user": "Uddin Shoeb",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": true
        }, {
            "user": "Shoeb Uddin",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": false
        }, {
            "user": "Myself",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": true
        }, {
            "user": "No one",
            "avatar": "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
            "hasUnseenStory": true
        }]
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Verify Add Story button exists
        const addStoryButton = canvas.getByText('Add Story');
        await expect(addStoryButton).toBeInTheDocument();

        // Verify stories are rendered
        const storyItems = canvas.getAllByRole('img');
        await expect(storyItems.length).toBeGreaterThan(1);

        // Test horizontal layout
        const container = canvas.getByRole('list');
        await expect(container).toHaveClass('grid-flow-col');
    }
}

export const Vertical: Story = {
    args: {
        orientation: "vertical",
        stories: [
            { user: "Shoeb", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: true },
            { user: "Uddin", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: false },
            { user: "Shoeb Uddin", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: false },
            { user: "Uddin Shoeb", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: true },
            { user: "Shoeb Uddin", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: false },
            { user: "Uddin Shoeb", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: true },
            { user: "Shoeb Uddin", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: false },
            { user: "Uddin Shoeb", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: true },
        ]
    },
}

export const WithInteraction: Story = {
    args: {
        orientation: "horizontal",
        stories: [
            { user: "Test User", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: true },
            { user: "Another User", avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid", hasUnseenStory: false },
        ]
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Find and click the first story item
        const firstStory = canvas.getByText('Test User').closest('span');
        await expect(firstStory).toBeTruthy();
        if (firstStory) {
            await userEvent.click(firstStory);
        }

    }
};

export const StoryInteractions: Story = {
    args: {
        orientation: "horizontal",
        stories: [
            {
                user: "Test User",
                avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
                hasUnseenStory: true
            }
        ]
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const storyUser = canvas.getByText('Test User');
        const storyContainer = storyUser.closest('div');
        await expect(storyContainer).toBeTruthy();

        if (storyContainer) {
            // Check initial gradient state
            const gradientDiv = storyContainer.querySelector('div');
            await expect(gradientDiv).toHaveClass('bg-gradient-to-tr');

            await userEvent.click(storyContainer);
            await userEvent.hover(storyContainer);
            await expect(storyContainer.firstChild).toHaveClass('hover:scale-105');
        }
    }
};

export const AddStoryInteraction: Story = {
    args: {
        orientation: "horizontal",
        stories: []
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const addStoryButton = canvas.getByText('Add Story');
        await expect(addStoryButton).toBeInTheDocument();

        const addStoryContainer = addStoryButton.parentElement;
        await userEvent.hover(addStoryContainer as HTMLElement);
        const plusIcon = canvas.getByRole('img', { hidden: true });
        await expect(plusIcon).toBeInTheDocument();
    }
};
