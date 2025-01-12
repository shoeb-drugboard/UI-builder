import { ComponentProps } from "react";
import { Meta, StoryObj } from '@storybook/react';
import { Button } from "@nextui-org/react";
import { userEvent, within } from "@storybook/test";

interface PlayContext {
    canvasElement: HTMLElement;
}
type StoryProps = ComponentProps<typeof Button>;


const meta: Meta<StoryProps> = {
    title: "NextUI/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"]
        },
        color: {
            control: "select",
            options: ["default", "primary", "secondary", "success", "warning", "danger"]
        },
        variant: {
            control: "select",
            options: ["solid", "bordered", "light", "flat", "faded", "shadow"]
        },
        onPress: { action: "fire it up" }
    },
    // args: {
    //     onClick: () => alert("Button Clicked")
    // }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Small: Story = {
    args: {
        children: "Small Button",
        size: "sm",
        variant: "solid",
        className: "bg-red-500"
    }
}

export const Medium: Story = {
    args: {
        children: "Medium Button",
        size: "md",
        variant: "solid",
        className: "bg-blue-500"
    },
    play: async (context: PlayContext) => {
        const canvas = within(context.canvasElement);
        const button = canvas.getByRole('button');
        await userEvent.click(button);
    }
}

