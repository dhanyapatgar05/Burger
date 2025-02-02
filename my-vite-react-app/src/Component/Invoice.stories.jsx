import React from "react";
import Invoice from "./Invoice";
import "./Invoice.css";

export default {
  title: "Component/Invoice",
  component: Invoice,
};

const Template = (args) => <Invoice {...args} />;

export const Default = Template.bind({});
