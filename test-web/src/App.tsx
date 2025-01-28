import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Input, Row, Col, Card,  Avatar} from 'antd';import './App.css';
import MainLayout from './MainLayout';
import Settings from './Settings';

const { Content } = Layout;
const { Search } = Input;
const { Meta } = Card;

const App: React.FC = () => {
  const onSearch = (value: string) => console.log(value);
  
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/settings" Component={Settings} />
          <Route path="/" element={
            <Content style={{ padding: '0 50px' }}>
              <div className="site-layout-content">
                <Search
                  placeholder="Search blogs"
                  enterButton="Search"
                  size="large"
                  onSearch={onSearch}
                  style={{ marginBottom: '20px'}}
                  className='custom-search'
                />
                <div className="blog-intro">
                  <h2>Blog</h2>
                  <p style={{ fontSize: '16px', paddingBottom: '10px'}}>Discover insightful resources and expert advice from our seasoned team to elevate your knowledge.</p>
                </div>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Card
                      hoverable
                      className="custom-card"
                      cover={<img alt="example" src="/assets/work2.jpg" style={{height:'400px'}} />}>
                      <Meta 
                        avatar={<Avatar src="/assets/work1.jpg" />}
                        title={
                          <div>
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Understanding React Hooks</div>
                            <div style={{ fontSize: '12px', color: 'gray' }}>Manu Arora</div>
                          </div>
                        }
                        description="A comprehensive guide to understanding and using React Hooks in your projects."
                        style={{ margin: '20px 20px 20px 20px'}} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      className="custom-card"
                      cover={<img alt="example" src="/assets/work3.jpg" style={{height:'400px'}}/>}>
                      <Meta 
                        avatar={<Avatar src="/assets/work1.jpg" />}
                        title={
                          <div>
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Changelog for 2025</div>
                            <div style={{ fontSize: '12px', color: 'gray' }}>Manu Arora</div>
                          </div>
                        }
                        description="Explore the latest updates and enhancements in our 2024 changelog. Discover new features and improvements."
                        style={{ margin: '20px 20px 20px 20px'}} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      className="custom-card"
                      cover={<img alt="example" src="/assets/work4.jpg" style={{height:'400px'}}/>}>
                      <Meta 
                        avatar={<Avatar src="/assets/work1.jpg" />}
                        title={
                          <div>
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>CSS Grid Layout</div>
                            <div style={{ fontSize: '12px', color: 'gray' }}>Manu Arora</div>
                          </div>
                        }
                        description="Learn how to create complex layouts easily with CSS Grid."
                        style={{ margin: '20px 20px 20px 20px'}} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      className="custom-card"
                      cover={<img alt="example" src="/assets/work5.jpg" style={{height:'400px'}}/>}>
                      <Meta 
                        avatar={<Avatar src="/assets/work1.jpg" />}
                        title={
                          <div>
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>CSS Grid Layout</div>
                            <div style={{ fontSize: '12px', color: 'gray' }}>Manu Arora</div>
                          </div>
                        }
                        description="Learn how to create complex layouts easily with CSS Grid."
                        style={{ margin: '20px 20px 20px 20px'}} />
                    </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                      hoverable
                      className="custom-card"
                      cover={<img alt="example" src="/assets/work2.jpg" style={{height:'400px'}} />}>
                      <Meta 
                        avatar={<Avatar src="/assets/work1.jpg" />}
                        title={
                          <div>
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Understanding React Hooks</div>
                            <div style={{ fontSize: '12px', color: 'gray' }}>Manu Arora</div>
                          </div>
                        }
                        description="A comprehensive guide to understanding and using React Hooks in your projects."
                        style={{ margin: '20px 20px 20px 20px'}} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      className="custom-card"
                      cover={<img alt="example" src="/assets/work3.jpg" style={{height:'400px'}} />}>
                      <Meta 
                        avatar={<Avatar src="/assets/work1.jpg" />}
                        title={
                          <div>
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Understanding React Hooks</div>
                            <div style={{ fontSize: '12px', color: 'gray' }}>Manu Arora</div>
                          </div>
                        }
                        description="A comprehensive guide to understanding and using React Hooks in your projects."
                        style={{ margin: '20px 20px 20px 20px'}} />
                    </Card>
                  </Col>
                </Row>
              </div>
            </Content>
          } />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;