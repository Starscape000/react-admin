// 登录组件

import React from 'react';
import {HashRouter, Link, Route} from 'react-router-dom';
import './home.scss'; 
import { Menu, Dropdown, Avatar } from 'antd';
import {
    Html5Outlined,
    HomeOutlined,
    GithubOutlined,
    EditOutlined,
    SettingOutlined,
    PoweroffOutlined
} from '@ant-design/icons';

import Index from '../index/index';

const {SubMenu} = Menu;

export default class Home extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            username: '',
            routing: '首页'
        }
    }

    componentWillMount () {
        // 拿到localStorage存到的username
        this.setState({
            username: localStorage.getItem('username')
        })
    }

    logOut = () => {
        // 清除localStorage的username
        localStorage.removeItem('username');
        // 跳转到登录页面
        this.props.history.push('/');
    }

    render () {

        const menu = (
        <Menu>
            <h4 className='title' style={{color: '#aaa', paddingLeft: '10px'}}>用户设置</h4>
            <hr/>
            <Menu.Item>
            <a rel="noopener noreferrer" href="javascript:;">
                <EditOutlined style={{marginRight: '10px'}} />个人设置
            </a>
            </Menu.Item>
            <Menu.Item>
            <a rel="noopener noreferrer" href="javascript:;">
                <SettingOutlined style={{marginRight: '10px'}} />系统设置
            </a>
            </Menu.Item>
            <Menu.Item>
            <a rel="noopener noreferrer" href="javascript:;" onClick={this.logOut}>
                <PoweroffOutlined style={{marginRight: '10px'}} />退出登录
            </a>
            </Menu.Item>
        </Menu>);

        return (
            <div className='home'>
                <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={'inline'}
                theme={'dark'}
                >
                    <Html5Outlined className='h5' />
                    <Menu.Item key="1">
                        <Link to='/home'>
                            <HomeOutlined className='inter' />
                            首页
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <HomeOutlined />
                        UI
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <HomeOutlined />
                                <span>Navigation Three</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                        <SubMenu key="sub1-2" title="Submenu">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <HomeOutlined />
                            <span>Navigation Four</span>
                        </span>
                    }
                    >
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>
                </Menu>
                <div className='right'>
                    <div className='header'>
                        <a href="https://github.com/Starscape000/react-admin.git" target='_blank'><GithubOutlined className='github' /></a>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDlKeiZPW2EXNfMvrkD5ddmoJi2zDZX988o7X9MkbWyWBVQg6T" />
                                <p>{this.state.username}</p>
                            </a>
                        </Dropdown>
                        <p className='routing'>{this.state.routing}</p>
                    </div>
                    <div className='content'>
                        <Route exact path='/home' component={Index}></Route>
                    </div>
                </div>
            </div>
        );
    }
}