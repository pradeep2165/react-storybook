import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => {
  return <Input size="small" placeholder="small text" />;
};
export const Medium = () => {
  return <Input size="medium" placeholder="medium text" />;
};
export const Large = () => {
  return <Input size="large" placeholder="large text" />;
};
