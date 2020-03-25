// 首页组件

import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import './home.scss'; 
import { Menu, Dropdown, Avatar, Breadcrumb } from 'antd';
import {
    Html5Outlined,
    HomeOutlined,
    GithubOutlined,
    EditOutlined,
    SettingOutlined,
    PoweroffOutlined,
    AppstoreOutlined,
    FormOutlined,
    TableOutlined,
    EllipsisOutlined
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
import Animate from '../animate/animate';

const {SubMenu} = Menu;

export default class Home extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            menu: {},
            username: '',
            routingObj: {
                home: '首页',
                UI: 'UI',
                button: '按钮',
                icon: '图标',
                load: '加载',
                dialog: '对话框',
                folded: '折叠面板',
                label: '标签页',
                treecon: '树形控件',
                slide: '走马灯',
                form: '表单',
                common: '常用',
                richtext: '富文本',
                show: '展示数据',
                listbox: '列表',
                tablebox: '表格',
                other: '其它',
                animate: '动画',
                page404: '404',
                page500: '500'
            },
            routing: '',
            rootSubmenuKeys: ['UI', 'form', 'show', 'other'],
            openKeys: [],
            defaultOpenKeys: [],
            defaultSelectedKeys: []
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
        let arr = this.props.location.pathname.split('/');
        if (arr.length == 2) {
            this.setState({
                defaultSelectedKeys: arr[1]
            })
        } else if (arr.length == 3) {
            this.setState({
                defaultOpenKeys: arr[1],
                defaultSelectedKeys: arr[2]
            })
        }
    }

    componentDidMount () {
        let arr = this.props.location.pathname.split('/');
        if (arr.length == 3) {
            this.setState({
                openKeys: arr
            })
        }
    }

    componentWillReceiveProps (nextProps, nextState) {
        if (this.props.location.pathname !== nextProps.location.pathname){
            // 路由发生了变化
            let arr = nextProps.location.pathname.split('/');
            if (arr.length == 2) {
                this.setState({
                    openKeys: []
                })
            } 
            if (arr[1] == 'home') {
                this.setState({
                    routing: []
                })
            } else {
                let routing = [];
                arr.shift();
                routing = arr.map(item => {
                    return item = this.state.routingObj[item];
                })
                this.setState({
                    routing: routing
                })
            }
        }
    }

    logOut = () => {
        // 清除localStorage的username
        localStorage.removeItem('username');
        // 跳转到登录页面
        this.props.history.push('/login');
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
            if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
            } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render () {

        return (
            <div className='home'>
                <div className='left'>
                    <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={this.state.defaultSelectedKeys}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
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
                                <Link to='/UI/button'>
                                    按钮
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="icon">
                                <Link to='/UI/icon'>
                                    图标
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="load">
                                <Link to='/UI/load'>
                                    加载
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="dialog">
                                <Link to='/UI/dialog'>
                                    对话框
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="folded">
                                <Link to='/UI/folded'>
                                    折叠面板
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="label">
                                <Link to='/UI/label'>
                                    标签页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="treecon">
                                <Link to='/UI/treecon'>
                                    树形控件
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="slide">
                                <Link to='/UI/slide'>
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
                        <SubMenu
                            key="other"
                            title={
                                <span>
                                    <EllipsisOutlined className='inter' />
                                    <span>其它</span>
                                </span>
                            }
                        >
                            <Menu.Item key="animate">
                                <Link to='/other/animate'>
                                    动画
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="page404">
                                <Link to='/page404'>
                                    404
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="page500">
                                <Link to='/page500'>
                                    500
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className='right'>
                    <div className='header'>
                        <a href="https://github.com/Starscape000/react-admin.git" className="aGithub" target='_blank'><GithubOutlined className='github' /></a>
                        <Dropdown overlay={this.state.menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDlKeiZPW2EXNfMvrkD5ddmoJi2zDZX988o7X9MkbWyWBVQg6T" />
                                <p>{this.state.username}</p>
                            </a>
                        </Dropdown>
                        <p className='routing'>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to='/home'>
                                        首页
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {this.state.routing[0]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {this.state.routing[1]}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </p>
                    </div>
                    <div className='content'>
                        <Route exact path='/'>
                            <Redirect to="/home" />
                        </Route>
                        <Route path='/home' component={Index}></Route>
                        <Route path='/UI/button' component={Buttonc}></Route>
                        <Route path='/UI/icon' component={Icon}></Route>
                        <Route path='/UI/load' component={Load}></Route>
                        <Route path='/UI/dialog' component={Dialog}></Route>
                        <Route path='/UI/folded' component={Folded}></Route>
                        <Route path='/UI/label' component={Label}></Route>
                        <Route path='/UI/treecon' component={Treecon}></Route>
                        <Route path='/UI/slide' component={Slide}></Route>
                        <Route path='/form/common' component={Common}></Route>
                        <Route path='/form/richtext' component={Richtext}></Route>
                        <Route path='/show/listbox' component={Listbox}></Route>
                        <Route path='/show/tablebox' component={Tablebox}></Route>
                        <Route path='/other/animate' component={Animate}></Route>
                    </div>
                </div>
            </div>
        );
    }
}