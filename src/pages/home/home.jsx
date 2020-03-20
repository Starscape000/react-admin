// 首页组件

import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import './home.scss'; 
import { Menu, Dropdown, Avatar } from 'antd';
import {
    Html5Outlined,
    HomeOutlined,
    GithubOutlined,
    EditOutlined,
    SettingOutlined,
    PoweroffOutlined,
    AppstoreOutlined
} from '@ant-design/icons';

import Index from '../index/index';
import Buttonc from '../buttonc/buttonc';
import Icon from '../icon/icon';
import Load from '../load/load';
import Dialog from '../dialog/dialog';

const {SubMenu} = Menu;

export default class Home extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            menu: {},
            username: '',
            routing: '首页'
        }
    }

    componentWillMount () {
        // 判断用户是否登录过
        if (localStorage.getItem('username')) {
            // 拿到localStorage存到的username
            this.setState({
                username: localStorage.getItem('username')
            })
        } else {
            // 跳转到登录页面
            this.props.history.push('/login');
        }
        // 初始化设置面板
        let menu = (
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
        // 把初始化的数据赋值给状态数据
        this.setState({
            menu: menu
        })
    }

    logOut = () => {
        // 清除localStorage的username
        localStorage.removeItem('username');
        // 跳转到登录页面
        this.props.history.push('/login');
    }

    render () {

        return (
            <div className='home'>
                <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={'home'}
                // defaultOpenKeys={'UI'}
                mode={'inline'}
                theme={'dark'}
                >
                    <Html5Outlined className='h5' />
                    <Menu.Item key="home">
                        <Link to='/home'>
                            <HomeOutlined className='inter' />
                            首页
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="UI"
                        title={
                            <span>
                                <AppstoreOutlined className='inter' />
                                <span>UI</span>
                            </span>
                        }
                    >
                        <Menu.Item key="button">
                            <Link to='/general/button'>
                                按钮
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="icon">
                            <Link to='/general/icon'>
                                图标
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="load">
                            <Link to='/general/load'>
                                加载
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="dialog">
                            <Link to='/general/dialog'>
                                对话框
                            </Link>
                        </Menu.Item>
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
                        <Dropdown overlay={this.state.menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDlKeiZPW2EXNfMvrkD5ddmoJi2zDZX988o7X9MkbWyWBVQg6T" />
                                <p>{this.state.username}</p>
                            </a>
                        </Dropdown>
                        <p className='routing'>{this.state.routing}</p>
                    </div>
                    <div className='content'>
                        
                        <Route exact path='/'>
                            <Redirect to="/home" />
                        </Route>
                        <Route path='/home' component={Index}></Route>
                        <Route path='/general/button' component={Buttonc}></Route>
                        <Route path='/general/icon' component={Icon}></Route>
                        <Route path='/general/load' component={Load}></Route>
                        <Route path='/general/dialog' component={Dialog}></Route>
                    </div>
                </div>
            </div>
        );
    }
}