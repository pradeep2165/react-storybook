import React from "react";
import { Button } from "@charka-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => {
  return <Button variantColor="green">Success</Button>;
};
export const Danger = () => {
  return <Button variantColor="red">Danger</Button>;
};
