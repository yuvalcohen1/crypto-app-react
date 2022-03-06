import React, { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Col, Select, Typography } from "antd";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

type Props = {};

const CryptoDetails = (props: Props) => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId as string);
  const [timePeriod, setTimePeriod] = useState("7d");
  const [cryptoDetails, setCryptoDetails] = useState(null);
  const [stats, setStats] = useState<any[]>([]);
  const [genericStats, setGenericStats] = useState<any[]>([]);

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        {cryptoDetails && <Title level={2} className="coin-name"></Title>}
      </Col>
    </Col>
  );
};

export default CryptoDetails;
