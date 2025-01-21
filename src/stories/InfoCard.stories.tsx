import InfoCard from "@/components/BentoGrid/InfoCard";
import { Meta, StoryObj } from "@storybook/react";


type StoryProps = React.ComponentProps<typeof InfoCard>;

const meta: Meta<StoryProps> = {
    title: "Layout/InfoCard",
    component: InfoCard,

}

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        btnDesc: "View More",
        className: " rounded-md py-4",
        colorPrimaryBtn: "bg-orange-500",
        heading: "Total Users",
        colorPrimaryText: "text-orange-500",
        colorSecondary: "bg-orange-100",
        task: "42 tasks"
    }
}