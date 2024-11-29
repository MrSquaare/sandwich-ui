import "./preview.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: "light",
      themes: {
        light: "light",
        dark: "dark",
      },
    }),
  ],
};

export default preview;
