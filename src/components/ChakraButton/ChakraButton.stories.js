import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => {
  return (
    <Button colorScheme="green" onClick={action("Click handler")}>
      Success
    </Button>
  );
};
export const Danger = () => {
  return (
    <Button colorScheme="green" {...actions("onClick", "onMouseOver")}>
      Danger
    </Button>
  );
};
export const Log = () => {
  return (
    <Button colorScheme="blue" onClick={() => console.log("Button Clicked", process.env.STORYBOOK_THEME)}>
      Log
    </Button>
  );
};
export const knobs = () => {
  return (
    <Button disabled={boolean("Disabled", false)} colorScheme="yellow">
      {text("Label", "Button label")}
    </Button>
  );
};
