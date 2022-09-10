import React from "react";
import { Primary } from "../components/Button/Button.stories";
import { Large } from "../components/Input/Input.stories";

export default {
  title: "From/Subscription",
};

export const PrimarySubscription = () => {
  return (
    <>
      <Large />
      <Primary />
    </>
  );
};
