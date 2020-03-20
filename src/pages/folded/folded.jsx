import React from 'react';
import './folded.scss';
import { Collapse } from 'antd';

import { 
    CaretRightOutlined 
} from '@ant-design/icons';

const { Panel } = Collapse;

export default class Folded extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            text: `
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
            `
        }
    }

    render () {
        return (
            <div className='folded'>
                <div className='folded1'>
                    <p>基本使用</p>
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{this.state.text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                            <p>{this.state.text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3" disabled>
                            <p>{this.state.text}</p>
                        </Panel>
                    </Collapse>
                </div>
                <div className='folded2'>
                    <p>手风琴</p>
                    <Collapse accordion>
                        <Panel header="This is panel header 1" key="1">
                            <p>{this.state.text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                            <p>{this.state.text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                            <p>{this.state.text}</p>
                        </Panel>
                    </Collapse>
                </div>
                <div className='folded3'>
                    <p>自定义面板</p>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        className="site-collapse-custom-collapse"
                    >
                        <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                            <p>{this.state.text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                            <p>{this.state.text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                            <p>{this.state.text}</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        );
    }
}