import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React from "react";
import { Dispatch, SetStateAction } from "react";

import "./Hamburger.less";

export type HamburgerType = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
};

console.log(
    `Hide Hamburger wait util 'Warning: findDOMNode is deprecated in StrictMode' fixed`
  );

const Hamburger = ({ collapsed, setCollapsed }: HamburgerType) => {
  return <></>;
  return React.createElement(
    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
    {
      className: "trigger",
      onClick: () => setCollapsed(!collapsed),
    }
  );
};

export default Hamburger;
