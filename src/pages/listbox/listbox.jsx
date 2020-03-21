import React from 'react';
import './listbox.scss';
import { List, Typography, Avatar, Button, Skeleton } from 'antd';
import reqwest from 'reqwest';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

export default class Listbox extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            data1: [],
            data2: [],
            initLoading: true,
            loading: false,
            data: [],
            list: []
        }
    }

    componentWillMount () {
        const data1 = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.'
        ]
        const data2 = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            }
        ]
        this.setState({
            data1: data1,
            data2: data2
        })
    }

    componentDidMount() {
        this.getData(res => {
          this.setState({
            initLoading: false,
            data: res.results,
            list: res.results,
          });
        });
      }
    
      getData = callback => {
        reqwest({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: res => {
            callback(res);
          },
        });
      };
    
      onLoadMore = () => {
        this.setState({
          loading: true,
          list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
          const data = this.state.data.concat(res.results);
          this.setState(
            {
              data,
              list: data,
              loading: false,
            },
            () => {
              window.dispatchEvent(new Event('resize'));
            },
          );
        });
      }

    render () {
        const { initLoading, loading, list } = this.state;
        const loadMore =
        !initLoading && !loading ? (
            <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
            >
            <Button onClick={this.onLoadMore}>加载更多</Button>
            </div>
        ) : null;

        return (
            <div className='listbox'>
                <div className='listbox1'>
                    <p>简单列表</p>
                    <h3 style={{ marginBottom: 16 }}>默认尺寸</h3>
                    <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.data1}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                    />
                    <h3 style={{ margin: '16px 0' }}>小尺寸</h3>
                    <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.data1}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    />
                    <h3 style={{ margin: '16px 0' }}>大尺寸</h3>
                    <List
                    size="large"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.data1}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </div>
                <div className='listbox2'>
                    <p>基础列表</p>
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.data2}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                        )}
                    />
                </div>
                <div className='listbox3'>
                    <p>加载更多</p>
                    <List
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={item => (
                        <List.Item
                            actions={[<a key="list-loadmore-edit">编辑</a>, <a key="list-loadmore-more">更多</a>]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>content</div>
                            </Skeleton>
                        </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}