import React from 'react';
import './dialog.scss';
import { Modal, Button } from 'antd';

import { 
    ExclamationCircleOutlined 
} from '@ant-design/icons';

const { confirm } = Modal;

export default class Dialog extends React.Component {
    constructor (props) {
        super(props)
        
        this.state = {
            visible: false,
            visible1: false,
            visible2: false,
            ModalText: 'Content of the modal',
            confirmLoading: false,
            loading: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    showModal1 = () => {
        this.setState({
            visible1: true,
        });
    }

    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    }

    handleOk = e => {
        console.log('确认');
        this.setState({
            visible: false,
        })
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        })
        setTimeout(() => {
            this.setState({
                visible1: false,
                confirmLoading: false,
            });
        }, 2000)
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible2: false });
        }, 3000)
    }

    handleCancel = e => {
        console.log('取消');
        this.setState({
            visible: false,
            visible1: false,
            visible2: false
        })
    }

    showConfirm = () => {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            cancelText: '取消',
            okText: '确认',
            onOk() {
                console.log('确认');
            },
            onCancel() {
                console.log('取消');
            }
        })
    }

    info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        })
    }

    success = () => {
        Modal.success({
            content: 'some messages...some messages...'
        })
    }

    error = () => {
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...'
        })
    }

    warning = () => {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...'
        })
    }

    render () {
        return (
            <div className='dialog'>
                <div className='main'>
                    <div>
                        <Button type="primary" onClick={this.showModal}>
                            基本
                        </Button>
                        <Modal
                        title="基本对话框"
                        cancelText='取消'
                        okText='确认'
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </div>
                    <div>
                        <Button type="primary" onClick={this.showModal1}>
                            异步关闭
                        </Button>
                        <Modal
                        title="异步关闭"
                        cancelText='取消'
                        okText='确认'
                        visible={this.state.visible1}
                        onOk={this.handleOk}
                        confirmLoading={this.state.confirmLoading}
                        onCancel={this.handleCancel}
                        >
                            <p>{this.state.ModalText}</p>
                        </Modal>
                    </div>
                    <div>
                        <Button type="primary" onClick={this.showModal2}>
                            自定义页脚
                        </Button>
                        <Modal
                        visible={this.state.visible2}
                        title="自定义页脚"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                                返回
                            </Button>,
                            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                                提交
                            </Button>,
                        ]}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </div>
                    <div>
                        <Button onClick={this.showConfirm}>确认框</Button>
                    </div>
                    <Button onClick={this.info}>提示信息</Button>
                    <Button onClick={this.success}>成功</Button>
                    <Button onClick={this.error}>错误</Button>
                    <Button onClick={this.warning}>警告</Button>
                </div>
            </div>
        );
    }
}