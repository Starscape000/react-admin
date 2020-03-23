import React from 'react';
import './animate.scss';
import 'animate.css';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

export default class Animate extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            animate: '',
            enter: [],
            leave: [],
            other: []
        }
    }

    componentWillMount () {
        let enter = [
            'bounceInDown',
            'bounceInLeft',
            'bounceInRight',
            'bounceInUp',
            'fadeIn',
            'fadeInDown',
            'fadeInLeft',
            'fadeInLeftBig',
            'fadeInRight',
            'fadeInRightBig',
            'fadeInUp',
            'fadeInUpBig',
            'flipInX',
            'flipInY',
            'rotateIn'
        ]
        let leave = [
            'bounceOut',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight',
            'bounceOutUp',
            'fadeInDown',
            'fadeOut',
            'fadeOutDown',
            'fadeOutDownBig',
            'fadeOutLeft',
            'fadeOutLeftBig',
            'fadeOutRight',
            'fadeOutRightBig',
            'fadeOutUp',
            'fadeOutUpBig',
            'rotateOut'
        ]
        let other = [
            'bounceIn',
            'bounce',
            'flash',
            'pulse',
            'rubberBand',
            'shake',
            'headShake',
            'swing',
            'tada',
            'wobble',
            'jello'
        ]
        this.setState({
            enter,
            leave,
            other
        })
    }

    animateEvent = item => {
        this.setState({
            animate: `animated ${item}`
        })
    }

    render () {
        return (
            <div className='animate'>
                <div className='animate1'>
                    <p>动画选择</p>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="进入" key="1">
                            {this.state.enter.map((item) => {
                                return (
                                    <Button key={item} onClick={this.animateEvent.bind(this, item)}>{item}</Button>
                                );
                            })}
                        </TabPane>
                        <TabPane tab="离开" key="2">
                            {this.state.leave.map((item) => {
                                return (
                                    <Button key={item} onClick={this.animateEvent.bind(this, item)}>{item}</Button>
                                );
                            })}
                        </TabPane>
                        <TabPane tab="其它" key="3">
                            {this.state.other.map((item) => {
                                return (
                                    <Button key={item} onClick={this.animateEvent.bind(this, item)}>{item}</Button>
                                );
                            })}
                        </TabPane>
                    </Tabs>
                </div>
                <div className='animate2'>
                    <p>效果展示</p>
                    <div className={this.state.animate} style={{width: '200px', height: '100px', background: 'green', margin: '250px auto 0'}}></div>
                </div>
            </div>
        );
    }
}