import React from 'react';
import { Layout, Menu, Card, Row, Col, Button, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const flowers = [
  {
    id: 1,
    name: 'Розы',
    description: 'Красивые свежие розы всех оттенков.',
    price: '500 руб/шт',
    img: 'https://example.com/roses.jpg',
  },
  {
    id: 2,
    name: 'Тюльпаны',
    description: 'Весенние тюльпаны всех цветов.',
    price: '300 руб/шт',
    img: 'https://example.com/tulips.jpg',
  },
  {
    id: 3,
    name: 'Лилии',
    description: 'Ароматные лилии для любого случая.',
    price: '700 руб/шт',
    img: 'https://example.com/lilies.jpg',
  },
  {
    id: 4,
    name: 'Гвоздики',
    description: 'Классические гвоздики красных оттенков.',
    price: '200 руб/шт',
    img: 'https://example.com/carnations.jpg',
  },
];

const MainPage = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Главная</Menu.Item>
          <Menu.Item key="2">Каталог</Menu.Item>
          <Menu.Item key="3">Контакты</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px', marginTop: 64 }}>
        <Title level={2} style={{ textAlign: 'center' }}>
          Добро пожаловать в наш цветочный магазин!
        </Title>
        <Paragraph style={{ textAlign: 'center' }}>
          У нас вы найдете лучшие цветы для любого события.
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          {flowers.map((flower) => (
            <Col key={flower.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={flower.name} src={flower.img} />}
                actions={[
                  <Button type="primary">Купить</Button>,
                ]}
              >
                <Card.Meta
                  title={flower.name}
                  description={
                    <>
                      <p>{flower.description}</p>
                      <p>{flower.price}</p>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Цветочный Магазин ©2024. Все права защищены.
      </Footer>
    </Layout>
  );
};

export default MainPage;
