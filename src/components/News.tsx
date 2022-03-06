import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

interface Props {
  simplified: boolean;
}

const News: FC<Props> = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  useEffect(() => {
    console.log(newsCategory);
  }, [newsCategory]);

  if (!cryptoNews?.value) return <div>Loading...</div>;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              (option!.children! as any)
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data.coins.map((coin) => (
              <Option key={coin.uuid} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews &&
        cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="new-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={
                      news.image ? news.image.thumbnail.contentUrl : demoImage
                    }
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                    alt="news"
                  />
                </div>
                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>{moment(news.datePublished).startOf("s").fromNow()}</Text>
              </a>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default News;
