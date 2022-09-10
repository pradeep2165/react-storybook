import React from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
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
