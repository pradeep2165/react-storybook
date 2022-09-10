import React from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export const Primary = () => {
  return <Button variant="primary"> primary </Button>;
};
export const Secondary = () => {
  return <Button variant="secondary"> Secondary </Button>;
};
export const Success = () => {
  return <Button variant="success"> Success </Button>;
};
export const Danger = () => {
  return <Button variant="danger"> Danger </Button>;
};

const Templete = (args) => <Button {...args} />;
export const PrimaryA = Templete.bind();

PrimaryA.args = {
  variant: "primary",
  // children: "Primary Args",
};

export const LongSecondaryA = Templete.bind();
LongSecondaryA.args = {
  ...PrimaryA.args,
  // children: "Long Secondary Args",
};
export const SecondaryA = Templete.bind();
SecondaryA.args = {
  variant: "secondary",
  // children: "Secondary Args",
};
