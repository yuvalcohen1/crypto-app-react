import React from "react";
import { Avatar, Button, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
} from "@ant-design/icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
          size="large"
        />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} key={1}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key={2}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key={3}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key={4}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
