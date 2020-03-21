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
    AppstoreOutlined,
    FormOutlined,
    TableOutlined
} from '@ant-design/icons';

import Index from '../index/index';
import Buttonc from '../buttonc/buttonc';
import Icon from '../icon/icon';
import Load from '../load/load';
import Dialog from '../dialog/dialog';
import Folded from '../folded/folded';
import Label from '../label/label';
import Treecon from '../treecon/treecon';
import Slide from '../slide/slide';
import Common from '../common/common';
import Richtext from '../richtext/richtext';
import Listbox from '../listbox/listbox';
import Tablebox from '../tablebox/tablebox';

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
                        <Menu.Item key="folded">
                            <Link to='/general/folded'>
                                折叠面板
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="label">
                            <Link to='/general/label'>
                                标签页
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="tree">
                            <Link to='/general/treecon'>
                                树形控件
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="slide">
                            <Link to='/general/slide'>
                                走马灯
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="form"
                        title={
                            <span>
                                <FormOutlined className='inter' />
                                <span>表单</span>
                            </span>
                        }
                    >
                        <Menu.Item key="common">
                            <Link to='/form/common'>
                                常用
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="richtext">
                            <Link to='/form/richtext'>
                                富文本
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="show"
                        title={
                            <span>
                                <TableOutlined className='inter' />
                                <span>展示数据</span>
                            </span>
                        }
                    >
                        <Menu.Item key="listbox">
                            <Link to='/show/listbox'>
                                列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="tablebox">
                            <Link to='/show/tablebox'>
                                表格
                            </Link>
                        </Menu.Item>
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
                        <Route path='/general/folded' component={Folded}></Route>
                        <Route path='/general/label' component={Label}></Route>
                        <Route path='/general/treecon' component={Treecon}></Route>
                        <Route path='/general/slide' component={Slide}></Route>
                        <Route path='/form/common' component={Common}></Route>
                        <Route path='/form/richtext' component={Richtext}></Route>
                        <Route path='/show/listbox' component={Listbox}></Route>
                        <Route path='/show/tablebox' component={Tablebox}></Route>
                    </div>
                </div>
            </div>
        );
    }
}