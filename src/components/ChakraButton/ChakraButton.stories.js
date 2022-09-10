import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Templete = (args) => <Button {...args} />;
export const Success = Templete.bind();

Success.args = {
  colorScheme: "teal",
  variant: "solid",
  children: "Success",
};

export const Danger = Templete.bind();

Danger.args = {
  colorScheme: "red",
  variant: "solid",
  children: "Danger",
};
