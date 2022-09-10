import { addDecorator, addParameters } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { theme, CSSReset, ThemeProvider, Box } from "@chakra-ui/react";
import React from "react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">
        <Story />
      </Box>
    </ThemeProvider>
  ),
];

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
