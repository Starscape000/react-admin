import React from 'react';
import './slide.scss';
import { Carousel, Radio } from 'antd';

export default class Slide extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            dotPosition: 'top'
        }
    }

    handlePositionChange = ({ target: { value: dotPosition } }) => {
        this.setState({ dotPosition });
    }

    render () {
        return (
            <div className='slide'>
                <div className='slide1'>
                    <p>基本使用</p>
                    <Carousel>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
                <div className='slide2'>
                    <p>位置</p>
                    <Radio.Group
                    onChange={this.handlePositionChange}
                    value={this.state.dotPosition}
                    style={{ marginBottom: 8 }}
                    >
                    <Radio.Button value="top">Top</Radio.Button>
                    <Radio.Button value="bottom">Bottom</Radio.Button>
                    <Radio.Button value="left">Left</Radio.Button>
                    <Radio.Button value="right">Right</Radio.Button>
                    </Radio.Group>
                    <Carousel dotPosition={this.state.dotPosition}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
                <div className='slide3'>
                    <p>自动切换</p>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
                <div className='slide4'>
                    <p>渐显</p>
                    <Carousel effect="fade">
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}