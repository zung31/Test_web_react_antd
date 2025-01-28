import React from 'react';
import { Layout, Menu, Button, Form, Input, Card, Row, Col, Select, Avatar } from 'antd';
import { ArrowLeftOutlined, BellOutlined, EditOutlined, LockOutlined, QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import './App.css';
import { Link } from 'react-router-dom';

const { Item } = Form;
const { Sider, Content } = Layout;
const { Option } = Select;
interface ProfileFormValues {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  contactNumber: string;
  city: string;
  password: string;
  state: string;
}

const EditProfile = () => {
  const onFinish = (values: ProfileFormValues) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        width={200}
        style={{
            backgroundColor: '#fff',
            boxShadow: '1px 6px rgba(0, 0, 0, 0.1)',
            padding: '16px 0',
        }}
      >
        <div style={{ padding: '0 16px', marginBottom: '16px' }}>
            <Link to="/">
            <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                style={{ fontWeight: 'bold', padding: '0' }}>
                Settings
            </Button>
          </Link>
        </div>
        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ backgroundColor: '#fff' }}>
          <Menu.Item key="1" icon={<EditOutlined />}>
            Edit Profile
          </Menu.Item>
          <Menu.Item key="2" icon={<BellOutlined />}>
            Notification
          </Menu.Item>
          <Menu.Item key="3" icon={<LockOutlined />}>
            Security
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            Appearance
          </Menu.Item>
          <Menu.Item key="5" icon={<QuestionCircleOutlined />}>
            Help
          </Menu.Item>          
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', backgroundColor: '#fff' }}>
          <Card title={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Edit Profile</span>
                <Avatar size={64} src={'/assets/photo.jpg'} />
              </div>
            }
            style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
            <Form
              name="edit_profile"
              onFinish={onFinish}
              layout="vertical"
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                  >
                    <Input placeholder="Leman"/>
                  </Item>
                </Col>
                <Col span={12}>
                  <Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                  >
                    <Input placeholder='Suleymanova'/>
                  </Item>
                </Col>
              </Row>

              <Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder='Leman:suleymanova@gmail.com'/>
              </Item>

              <Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input placeholder='Ganclik m/ix, Ziya Bunyadzade.'/>
              </Item>
              <Item
                label="Contact Number"
                name="contactNumber"
                rules={[{ required: true, message: 'Please input your contact number!' }]}>
                <Input placeholder='+994123456789'/>
              </Item>
              <Row gutter={16}>
                <Col span={12}>
                    <Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please select your city!' }]}>
                        <Select placeholder="Select a city">
                            <Option value="New York">New York</Option>
                            <Option value="Los Angeles">Los Angeles</Option>
                            <Option value="Chicago">Chicago</Option>
                            <Option value="Houston">Houston</Option>
                            <Option value="Phoenix">Phoenix</Option>
                        </Select>
                    </Item>
                </Col>
                <Col span={12}>
                    <Item
                    label="State"
                    name="state"
                    rules={[{ required: true, message: 'Please select your state!' }]}>
                        <Select placeholder="Select a state">
                            <Option value="New York">New York</Option>
                            <Option value="California">California</Option>
                            <Option value="Illinois">Illinois</Option>
                            <Option value="Texas">Texas</Option>
                            <Option value="Arizona">Arizona</Option>
                        </Select>
                    </Item>   
                </Col>
              </Row>
              <Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Item>
              <Item>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Button type="default" style={{ marginRight: '8px', borderColor: '#c83a67cc'}} className='cancel-button'>
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Save Changes
                  </Button>
                </div>
              </Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EditProfile;