import React from 'react';
import './buttonc.scss';
import { Button, Radio, Menu, Dropdown } from 'antd';

import { 
    SearchOutlined,
    DownloadOutlined,
    DownOutlined,
    PoweroffOutlined    
} from '@ant-design/icons';

export default class Buttonc extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            menu: {},
            size: 'large',
            loading: false,
            iconLoading: false
        }
    }

    componentWillMount () {
        let menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1">1st item</Menu.Item>
              <Menu.Item key="2">2nd item</Menu.Item>
              <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>)
        this.setState({
            menu: menu
        })
    }

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    }

    handleMenuClick = e => {
        console.log('click', e);
    }

    enterLoading = () => {
        this.setState({ loading: true });
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }

    render () {
        let size = this.state.size;
        return (
            <div className='btn'>
                <div className='btn1'>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button danger>Danger</Button>
                    <Button type="link">Link</Button>
                </div>
                <div className='btn2'>
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    <Button type="primary" shape="circle">A</Button>
                    <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                    <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    <Button type="dashed" shape="circle">A</Button>
                    <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
                </div>
                <div className='btn3'>
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br />
                    <br />
                    <Button type="primary" size={size}>
                        Primary
                    </Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>
                        Dashed
                    </Button>
                    <br />
                    <Button type="link" size={size}>
                        Link
                    </Button>
                    <br />
                    <Button type="primary" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                </div>
                <div className='btn4'>
                    <Button type="primary">primary</Button>
                    <Button>secondary</Button>
                    <Dropdown overlay={this.state.menu}>
                        <Button>
                            Actions <DownOutlined />
                        </Button>
                    </Dropdown>
                    <br />
                    <br />
                    <br />
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <br />
                    <br />
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                        Click me!
                    </Button>
                    <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={this.state.iconLoading}
                    onClick={this.enterIconLoading}
                    >
                        Click me!
                    </Button>
                </div>
                <div className='btn5'>
                    <Button type="primary" block>
                        Primary
                    </Button>
                    <Button block>Default</Button>
                    <Button type="dashed" block>
                        Dashed
                    </Button>
                    <Button danger block>
                        Danger
                    </Button>
                    <Button type="link" block>
                        Link
                    </Button>
                </div>
            </div>
        );
    }
}