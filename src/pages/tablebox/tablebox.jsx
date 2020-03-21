import React, { useState } from 'react';
import './tablebox.scss';
import { Table, Tag, Input, InputNumber, Popconfirm, Form } from 'antd';

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
}

export default class Tablebox extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            columns1: [],
            data1: [],
            columns2: [],
            data2: [],
            selectedRowKeys: []
        }
    }

    componentWillMount () {
        const columns1 = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <span>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </span>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                  <a>Delete</a>
                </span>
              ),
            },
          ]
          const data1 = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ]
          const columns2 = [
            {
              title: 'Name',
              dataIndex: 'name',
            },
            {
              title: 'Age',
              dataIndex: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
            },
          ]
          const data2 = [];
          for (let i = 0; i < 46; i++) {
            data2.push({
              key: i,
              name: `Edward King ${i}`,
              age: 32,
              address: `London, Park Lane no. ${i}`,
            });
          }
        this.setState({
            columns1,
            data1,
            columns2,
            data2
        })
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    render () {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: changableRowKeys => {
                  let newSelectedRowKeys = [];
                  newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                    if (index % 2 !== 0) {
                      return false;
                    }
                    return true;
                  });
                  this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
              },
              {
                key: 'even',
                text: 'Select Even Row',
                onSelect: changableRowKeys => {
                  let newSelectedRowKeys = [];
                  newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                    if (index % 2 !== 0) {
                      return true;
                    }
                    return false;
                  });
                  this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
              },
            ],
          }

        return (
            <div className='tablebox'>
                <div className='tablebox1'>
                    <p>基本用法</p>
                    <Table columns={this.state.columns1} dataSource={this.state.data1} />
                </div>
                <div className='tablebox2'>
                    <p>自定义选择项</p>
                    <Table rowSelection={rowSelection} columns={this.state.columns2} dataSource={this.state.data2} />
                </div>
                <div className='tablebox3'>
                    <p>可编辑</p>
                    <EditableTable />
                </div>
            </div>
        );
    }
}