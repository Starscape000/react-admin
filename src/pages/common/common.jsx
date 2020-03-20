import React from 'react';
import './common.scss';
import { Form, Input, DatePicker, TimePicker, Tooltip, Cascader, Select, Row, Col, Button, Checkbox, InputNumber } from 'antd';

import { 
    UserOutlined, 
    LockOutlined,
    QuestionCircleOutlined,
    SmileOutlined  
} from '@ant-design/icons';

const { Option } = Select;

export default class Common extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            residences: [],
            formItemLayout: {},
            tailFormItemLayout: {},
            formItemLayout1: {}
        }
    }

    componentWillMount () {
        const residences = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake',
                            }
                        ]
                    }
                ]
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men',
                            }
                        ]
                    }
                ]
            }
        ]
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        }
        const formItemLayout1 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                span: 24,
                offset: 0,
                },
                sm: {
                span: 16,
                offset: 8,
                },
            },
        }
        this.setState({
            residences: residences,
            formItemLayout: formItemLayout,
            formItemLayout1: formItemLayout1,
            tailFormItemLayout: tailFormItemLayout
        })
    }

    render () {
        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
                </Select>
            </Form.Item>
        );

        return (
            <div className='common'>
                <div className='common1'>
                    <p>登录表单</p>
                    <Form
                    name="normal_login"
                    className="login-form"
                    style={{padding: '0 200px'}}
                    initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="javascript:;">
                                忘记密码
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                            <br/>
                            <br/>
                            <a href="javascript:;">注册</a>
                        </Form.Item>
                    </Form>
                </div>
                <div className='common2'>
                    <p>注册表单</p>
                    <Form
                    {...this.state.formItemLayout}
                    name="register"
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    scrollToFirstError
                    >
                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: '请输入邮箱地址!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '请输入确认密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="nickname"
                        label={
                        <span>
                            昵称&nbsp;
                            <Tooltip title="What do you want others to call you?">
                            <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                        }
                        rules={[{ required: true, message: '请输入昵称!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="residence"
                        label="常住地址"
                        rules={[
                        { type: 'array', required: true, message: 'Please select your habitual residence!' },
                        ]}
                    >
                        <Cascader options={this.state.residences} />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="电话号码"
                        rules={[{ required: true, message: '请输入你的电话号码!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item label="验证码">
                        <Row gutter={8}>
                        <Col span={12}>
                            <Form.Item
                            name="captcha"
                            noStyle
                            rules={[{ required: true, message: '请输入你获取的验证码!' }]}
                            >
                            <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Button>获取验证码</Button>
                        </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item name="agreement" valuePropName="checked" {...this.state.tailFormItemLayout}>
                        <Checkbox>
                        我已同意 <a href="javascript:;">协议</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...this.state.tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                        注册
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
                <div className='common3'>
                    <p>自定义校验</p>
                    <Form {...this.state.formItemLayout1}>
                        <Form.Item
                        label="Fail"
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets"
                        >
                        <Input placeholder="unavailable choice" id="error" />
                        </Form.Item>

                        <Form.Item label="Warning" validateStatus="warning">
                        <Input placeholder="Warning" id="warning" prefix={<SmileOutlined />} />
                        </Form.Item>

                        <Form.Item
                        label="Validating"
                        hasFeedback
                        validateStatus="validating"
                        help="The information is being validated..."
                        >
                        <Input placeholder="I'm the content is being validated" id="validating" />
                        </Form.Item>

                        <Form.Item label="Success" hasFeedback validateStatus="success">
                        <Input placeholder="I'm the content" id="success" />
                        </Form.Item>

                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                        <Input placeholder="Warning" id="warning2" />
                        </Form.Item>

                        <Form.Item
                        label="Fail"
                        hasFeedback
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets"
                        >
                        <Input placeholder="unavailable choice" id="error2" />
                        </Form.Item>

                        <Form.Item label="Success" hasFeedback validateStatus="success">
                        <DatePicker style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                        <TimePicker style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item label="Error" hasFeedback validateStatus="error">
                        <Select>
                            <Option value="1">Option 1</Option>
                            <Option value="2">Option 2</Option>
                            <Option value="3">Option 3</Option>
                        </Select>
                        </Form.Item>

                        <Form.Item
                        label="Validating"
                        hasFeedback
                        validateStatus="validating"
                        help="The information is being validated..."
                        >
                        <Cascader options={[]} />
                        </Form.Item>

                        <Form.Item label="inline" style={{ marginBottom: 0 }}>
                        <Form.Item
                            validateStatus="error"
                            help="Please select the correct date"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                        >
                            <DatePicker />
                        </Form.Item>
                        <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                            <DatePicker />
                        </Form.Item>
                        </Form.Item>

                        <Form.Item label="Success" hasFeedback validateStatus="success">
                        <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item label="Success" hasFeedback validateStatus="success">
                        <Input allowClear placeholder="with allowClear" />
                        </Form.Item>

                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                        <Input.Password placeholder="with input password" />
                        </Form.Item>

                        <Form.Item label="Error" hasFeedback validateStatus="error">
                        <Input.Password allowClear placeholder="with input password and allowClear" />
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}