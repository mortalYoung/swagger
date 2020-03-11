import * as React from 'react';
import { Card, Breadcrumb, Button, Table, Divider, Modal } from 'antd';
import { NavLink } from 'react-router-dom';
import Add from './Add';
// import Person from './person';
import EnhancePerson from './enhancePerson';
const { confirm } = Modal;
export interface dateSourceI {
    key: string,
    name: string,
    age: number,
    address: string
}
export interface IMore {
    java: Boolean
    php: Boolean
    javasciprt: Boolean
}
class Test extends React.PureComponent {
    personRef: React.RefObject<any> = React.createRef();
    state = {
        columns: [{
            title: 'Name',
            key: 'name',
            render: (record: dateSourceI) => {
                return <span>
                    <a onClick={() => this.handleCheckPerson(record)}>{record.name}</a>
                </span>
            }
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Action',
            key: 'action',
            render: (record: dateSourceI) => (
                <span>
                    <a onClick={() => this.handleEditData(record)}>edit {record.name}</a>
                    <Divider type="vertical" />
                    <a onClick={() => this.handleDeleteData(record)}>Delete</a>
                </span>
            ),
        }],
        dataSource: [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }],
        visible: false,
        edit: false,
        editData: {
            key: '',
            name: '',
            age: 0,
            address: '',
        },
        checkVisible: false,
        checkUser: {
            key: '',
            name: '',
            age: 0,
            address: '',
            java: false,
            javasciprt: false,
            php: false,
        }
    }
    handleAddData = (data: dateSourceI) => {
        const { edit, dataSource } = this.state;
        let copyData = dataSource.concat();
        if (!edit) {
            copyData.push({
                ...data,
                key: String(dataSource[dataSource.length - 1].key + 1)
            })
            this.setState({
                dataSource: copyData,
                visible: false
            })
        } else {
            let index = copyData.findIndex((d) => d.key === data.key);
            copyData[index] = data;
            this.setState({
                dataSource: copyData,
                visible: false
            })
        }
    }
    toggleVisible = (visibleStatus: boolean) => {
        this.setState({
            visible: visibleStatus
        })
    }
    handleNewData = () => {
        this.setState({
            edit: false,
            editData: {
                key: '',
                name: '',
                age: 0,
                address: '',
            }
        });
        this.toggleVisible(true)
    }
    handleDeleteData = (record: dateSourceI) => {
        const { dataSource } = this.state;
        let copyData = dataSource.concat();
        const _this = this;
        confirm({
            title: `Are you sure delete ${record.name}?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                let index = copyData.findIndex((d) => d.key === record.key);
                copyData.splice(index, 1);
                _this.setState({
                    dataSource: copyData
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    handleCheckPerson = (record: dateSourceI) => {
        // this.personRef.current.handleOk(record);
        //mock数据
        const res: IMore = {
            java: parseInt(record.key) % 2 === 0,
            javasciprt: parseInt(record.key) % 2 === 0,
            php: parseInt(record.key) % 2 != 0,
        }
        this.setState({
            checkUser: Object.assign({}, res, record),
            checkVisible: true
        })
    }
    handleEditData = (record: dateSourceI) => {
        this.setState({
            edit: true,
            editData: record
        }, () => {
            this.toggleVisible(true)
        });
    }
    renderTitle = () => {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>
                    <NavLink to="/">home</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    list
                </Breadcrumb.Item>
            </Breadcrumb>
        )
    }
    render() {
        const { columns, dataSource, visible, edit, editData, checkVisible, checkUser } = this.state;
        return (
            <>
                <Card
                    title={this.renderTitle()}
                    bordered={false}
                    headStyle={{ border: 'none' }}
                    extra={<Button type="primary" onClick={this.handleNewData}>add new data</Button>}
                >
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                    />
                    <Add
                        edit={edit}
                        data={editData}
                        visible={visible}
                        handleOk={this.handleAddData}
                        handleClose={() => this.toggleVisible(false)} />
                </Card>
                {/* <Person ref={this.personRef} /> */}
                <EnhancePerson modalSetting={{
                    visible: checkVisible,
                    title: checkUser.name,
                    onOk: () => { this.setState({ checkVisible: false }) },
                    onCancel: () => { this.setState({ checkVisible: false }) },
                }} user={checkUser} />
            </>
        )
    }
}
export default Test;