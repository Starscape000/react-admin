import React from 'react';
import './load.scss';
import { Spin, Switch, Alert, Progress } from 'antd';

export default class Load extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    toggle = value => {
        this.setState({ loading: value });
    }

    render () {
        return (
            <div className='load'>
                <div className='basic'>
                    <p>基本用法</p>
                    <Spin />
                </div>
                <div className='size'>
                    <p>各种大小</p>
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                </div>
                <div className='vessel'>
                    <p>放入容器</p>
                    <div className="example">
                        <Spin />
                    </div>
                </div>
                <div className='card'>
                    <p>卡片加载中</p>
                    <Spin spinning={this.state.loading}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <div style={{ marginTop: 16 }}>
                        Loading state：
                        <Switch checked={this.state.loading} onChange={this.toggle} />
                    </div>
                </div>
                <div className='explain'>
                    <p>自定义描述文案</p>
                    <Spin tip="Loading...">
                        <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                        />
                    </Spin>
                </div>
                <div className='stand'>
                    <p>进度条</p>
                    <div>
                        <Progress percent={30} status="active" />
                        <Progress percent={50} status="active" />
                        <Progress percent={70} status="exception" />
                        <Progress percent={100} />
                        <Progress percent={50} status="active" showInfo={false} />
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={99.9}
                        status="active"
                        />
                    </div>
                </div>
                <div className='circle'>
                    <p>进度圈</p>
                    <Progress type="circle" percent={75} />
                    <Progress type="circle" percent={70} status="exception" />
                    <Progress type="circle" percent={100} />
                    <Progress
                    type="circle"
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={90}
                    />
                    <Progress
                    type="circle"
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={100}
                    />
                </div>
            </div>
        );
    }
}