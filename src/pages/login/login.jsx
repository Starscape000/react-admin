// 登录组件

import React from 'react';
import './login.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import {
    UserOutlined,
    LockOutlined
  } from '@ant-design/icons';

export default class Login extends React.Component {
    constructor (props) {
        super(props)

        this.state = {}
    }

    componentWillMount () {
        // 判断当前是否有用户登录过
        if (localStorage.getItem('username')) {
            // 跳转路由到首页
            this.props.history.push('/home');
        }
    }

    render () {
        // 信息输入正确执行
        const onFinish = values => {
            // 设置登录标识符
            localStorage.setItem('username', values.username);

            // 跳转路由到首页
            this.props.history.push('/');
        };
        // 信息输入正确执行
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div className='login'>
                <div className='form'>
                    <h2>登录</h2>
                    <div className="icons-list user">
                        <UserOutlined />
                    </div>
                    <div className="icons-list lock">
                        <LockOutlined />
                    </div>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            label=""
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label=""
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}