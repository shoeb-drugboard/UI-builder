import type { Preview } from "@storybook/react";
import { NextUIProvider } from "@nextui-org/react";
import "../src/app/globals.css";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <NextUIProvider>
        <Story />
      </NextUIProvider>
    ),
  ],
};

export default preview;
