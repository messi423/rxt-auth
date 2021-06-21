import React, { Component, useState, useEffect} from 'react';
import {Button} from 'semantic-ui-react';
import {checkAuthState} from "../store/actions/auth";
import {Redirect } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from "../store/actions/auth";

import { Layout, Menu, Space, Typography } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  LogoutOutlined
} from '@ant-design/icons';

// function HomePage() {
//     const[count, setCount] = useState(0);
//     //const[name, setName] = useState({firstname:"", lastname:""});
//     document.title = `clicked ${count} times`;
//     const dispatch = useDispatch();

//     const auth = useSelector(state => state.auth);

//     // useEffect(()=>{
//     //     dispatch(checkAuthState());
//     // }, [!auth.user,dispatch]);

//     if(auth.user===null){
//         return (<Redirect to = "/login"/>);
//     }
    
//     return ( 
//         <Button onClick = {() => setCount(count+1)}>clicked {count} times</Button>
//      );
// }

// export default HomePage;



const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography;

const HomePage = (props) => {

    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }

    return (
    <Layout>
        <Sider
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}
        >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
            </Menu.Item>
        </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 10, color:"white" }} >
            
            <div style={{float:"left"}}>
                <h2 style={{color:"honeydew", fontFamily:"cursive"}}>Heading</h2>
            </div>
            <div style={{float:"right"}}>
            <Button icon={<LogoutOutlined/>} onClick={onLogout}> Logout</Button>
            </div>
            
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            
            
            content
            </div>
        </Content>
        <Space direction="vertical" style={{marginTop:"441px"}}>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Space>
        </Layout>
  </Layout>
);
}

export default HomePage;