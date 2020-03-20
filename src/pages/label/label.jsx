import React from 'react';
import './label.scss';
import { Tabs, Button, Radio } from 'antd';

import { 
    AppleOutlined, 
    AndroidOutlined 
} from '@ant-design/icons';

const { TabPane } = Tabs;

export default class Label extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            mode: 'top'
        }
    }

    handleModeChange = e => {
        let mode = e.target.value;
        this.setState({ mode });
    }

    render () {
        return (
            <div className='label'>
                <div className='label1'>
                    <p>基本</p>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
                <div className='label2'>
                    <p>禁用</p>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">
                            Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" disabled key="2">
                            Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Tab 3
                        </TabPane>
                    </Tabs>
                </div>
                <div className='label3'>
                    <p>图标</p>
                    <Tabs defaultActiveKey="1">
                        <TabPane
                        tab={
                            <span>
                                <AppleOutlined />
                                Tab 1
                            </span>
                        }
                        key="1"
                        >
                            Tab 1
                        </TabPane>
                        <TabPane
                        tab={
                            <span>
                                <AndroidOutlined />
                                Tab 2
                            </span>
                        }
                        key="2"
                        >
                            Tab 2
                        </TabPane>
                    </Tabs>
                </div>
                <div className='label4'>
                    <p>附加内容</p>
                    <Tabs tabBarExtraContent={<Button>Extra Action</Button>}>
                        <TabPane tab="Tab 1" key="1">
                            Content of tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of tab 3
                        </TabPane>
                    </Tabs>
                </div>
                <div className='label5'>
                    <p>滑动</p>
                    <Radio.Group onChange={this.handleModeChange} value={this.state.mode} style={{ marginBottom: 8 }}>
                        <Radio.Button value="top">Horizontal</Radio.Button>
                        <Radio.Button value="left">Vertical</Radio.Button>
                    </Radio.Group>
                    <Tabs defaultActiveKey="1" tabPosition={this.state.mode} style={{ height: 220 }}>
                        {[...Array(30).keys()].map(i => (
                            <TabPane tab={`Tab-${i}`} key={i}>
                            Content of tab {i}
                            </TabPane>
                        ))}
                    </Tabs>
                </div>
            </div>
        );
    }
}