import './Hamburger.less';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { createElement, Dispatch, SetStateAction } from 'react';

export type HamburgerType = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
};

console.log(
  `Hide Hamburger wait util 'Warning: findDOMNode is deprecated in StrictMode' fixed`,
);

const Hamburger = ({ collapsed, setCollapsed }: HamburgerType) => {
  return <></>;
  return createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: 'trigger',
    onClick: () => setCollapsed(!collapsed),
  });
};

export default Hamburger;
