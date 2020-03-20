import React from 'react';
import './treecon.scss';
import { Tree, Input } from 'antd';

import {
    DownOutlined,
    FrownOutlined,
    SmileOutlined,
    MehOutlined,
    FrownFilled,
  } from '@ant-design/icons';

const { DirectoryTree } = Tree;
const { Search } = Input;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

export default class Treecon extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            treeData1: [],
            treeData2: [],
            treeData3: [],
            treeData4: [],
            expandedKeys: [],
            searchValue: '',
            autoExpandParent: true
        }
    }

    componentWillMount () {
        let treeData1 = [
            {
                title: 'parent 1',
                key: '0-0',
                children: [
                    {
                        title: 'parent 1-0',
                        key: '0-0-0',
                        disabled: true,
                        children: [
                            {
                                title: 'leaf',
                                key: '0-0-0-0',
                                disableCheckbox: true,
                            },
                            {
                                title: 'leaf',
                                key: '0-0-0-1',
                            }
                        ]
                    },
                    {
                        title: 'parent 1-1',
                        key: '0-0-1',
                        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }]
                    }
                ]
            }
        ]
        let treeData2 = [
            {
                title: '0-0',
                key: '0-0',
                children: [
                    {
                        title: '0-0-0',
                        key: '0-0-0',
                        children: [
                            { title: '0-0-0-0', key: '0-0-0-0' },
                            { title: '0-0-0-1', key: '0-0-0-1' },
                            { title: '0-0-0-2', key: '0-0-0-2' }
                        ]
                    },
                    {
                        title: '0-0-1',
                        key: '0-0-1',
                        children: [
                            { title: '0-0-1-0', key: '0-0-1-0' },
                            { title: '0-0-1-1', key: '0-0-1-1' },
                            { title: '0-0-1-2', key: '0-0-1-2' }
                        ]
                    },
                    {
                        title: '0-0-2',
                        key: '0-0-2'
                    }
                ],
            },
            {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0' },
                    { title: '0-1-0-1', key: '0-1-0-1' },
                    { title: '0-1-0-2', key: '0-1-0-2' }
                ]
            },
            {
                title: '0-2',
                key: '0-2'
            }
        ]
        let treeData3 = [
            {
                title: 'parent 0',
                key: '0-0',
                children: [
                    { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
                    { title: 'leaf 0-1', key: '0-0-1', isLeaf: true }
                ]
            },
            {
                title: 'parent 1',
                key: '0-1',
                children: [
                    { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
                    { title: 'leaf 1-1', key: '0-1-1', isLeaf: true }
                ]
            }
        ]
        let treeData4 = [
            {
                title: 'parent 1',
                key: '0-0',
                icon: <SmileOutlined />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0',
                        icon: <MehOutlined />,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-1',
                        icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />),
                    }
                ]
            }
        ]
        this.setState({
            treeData1: treeData1,
            treeData2: treeData2,
            treeData3: treeData3,
            treeData4: treeData4
        })
    }

    onExpand = expandedKeys => {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    };
    
    onChange = e => {
        const { value } = e.target;
        const expandedKeys = dataList
            .map(item => {
            if (item.title.indexOf(value) > -1) {
                return getParentKey(item.key, gData);
            }
            return null;
            })
            .filter((item, i, self) => item && self.indexOf(item) === i);
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true,
        });
    }

    render () {
        const { searchValue, expandedKeys, autoExpandParent } = this.state;
        const loop = data =>
            data.map(item => {
                const index = item.title.indexOf(searchValue);
                const beforeStr = item.title.substr(0, index);
                const afterStr = item.title.substr(index + searchValue.length);
                const title =
                index > -1 ? (
                    <span>
                    {beforeStr}
                    <span className="site-tree-search-value">{searchValue}</span>
                    {afterStr}
                    </span>
                ) : (
                    <span>{item.title}</span>
                );
                if (item.children) {
                return { title, key: item.key, children: loop(item.children) };
                }

                return {
                title,
                key: item.key,
                };
            });
        return (
            <div className='treecon'>
                <div className='treecon1'>
                    <p>基本使用</p>
                    <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    treeData={this.state.treeData1}
                    />
                </div>
                <div className='treecon2'>
                    <p>受控操作</p>
                    <Tree
                    checkable
                    defaultExpandedKeys={['0-0', '0-1']}
                    treeData={this.state.treeData2}
                    />
                </div>
                <div className='treecon3'>
                    <p>可搜索</p>
                    <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
                    <Tree
                    onExpand={this.onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    treeData={loop(gData)}
                    />
                </div>
                <div className='treecon4'>
                    <p>目录</p>
                    <DirectoryTree
                    multiple
                    defaultExpandAll
                    treeData={this.state.treeData3}
                    />
                </div>
                <div className='treecon5'>
                    <p>自定义图标</p>
                    <Tree
                        showIcon
                        defaultExpandAll
                        defaultSelectedKeys={['0-0-0']}
                        switcherIcon={<DownOutlined />}
                        treeData={this.state.treeData4}
                    />
                </div>
            </div>
        );
    }
}