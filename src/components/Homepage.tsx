import React from "react";
import millify from "millify";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Stats } from "../models/Statsmodel.";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

type Props = {};

const Homepage = (props: Props) => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats: Stats | undefined = data?.data.stats;

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats ? globalStats.total : ""}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats ? globalStats.totalExchanges : 0)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats ? globalStats.totalMarketCap : 0)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats ? globalStats.total24hVolume : 0)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats ? globalStats.totalMarkets : 0)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
