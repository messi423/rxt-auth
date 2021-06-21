import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {login, checkAuthState} from "../store/actions/auth";
//import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Form, Input, Button, Checkbox, Space, Divider } from 'antd';


// const LoginPage = (props) => {

//     const [form, setForm] = useState({email:'', password:''});
//     const dispatch = useDispatch();
//     const auth = useSelector(state=>state.auth);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(login(form));
//     }

//     if(auth.user){
//         return (<Redirect to = "/"/>);
//     }
    
//     return(
//     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//     <Grid.Column style={{ maxWidth: 450 }}>
//       <Header as='h2' color='teal' textAlign='center'>
//         <Image src='/logo.png' /> Log-in to your account
//       </Header>

//       <Form size='large' onSubmit={handleSubmit}>
//         <Segment stacked>
//           <Form.Input fluid icon='user' 
//           value={form.email} onChange={e=>setForm({...form, email:e.target.value})} 
//           iconPosition='left' placeholder='E-mail address' />

//           <Form.Input
//             fluid
//             icon='lock'
//             value={form.password}
//             onChange = {e=>setForm({...form, password:e.target.value})}
//             iconPosition='left'
//             placeholder='Password'
//             type='password'
//           />

//           <Button color='teal' fluid size='large'>
//             Login
//           </Button>
//         </Segment>

//       </Form>
//       <Message>
//         New to us? <a href={`/signup`}>Sign Up</a>
//       </Message>
//     </Grid.Column>
//   </Grid>
//   );
// }

// export default LoginPage;


const LoginPage = (props) => {

    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(login(form));
    // }

  const onFinish = (values) => {
    const form = values;
    console.log('Success:', values);
    dispatch(login(form));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if(auth.user){
    return (<Redirect to = "/"/>);
  }

  return (
    <Space direction="vertical" style={{marginTop:"100px"}}>
      <Divider dashed><h2>Welcome To Messenger</h2></Divider>
      <br/>
    <Form
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <Divider/>
      <Space direction="horizontal">
        <h4>New To Messenger ?  </h4>
          <a href="\signup">Signup</a>
        </Space>
      <Divider/>
    </Space>
  );
};

export default LoginPage;