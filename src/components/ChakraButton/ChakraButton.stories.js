import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";

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
