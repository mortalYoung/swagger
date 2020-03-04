import * as React from 'react';
import { Modal, Spin, Descriptions, Badge } from 'antd';
import { dateSourceI } from './list';
interface IProps {

}
interface IMore {
    java: Boolean
    php: Boolean
    javasciprt: Boolean
}
const Person = React.forwardRef((_props: IProps, ref: any) => {
    const initDate: dateSourceI = {
        address: '',
        name: '',
        age: 0,
        key: ''
    }
    const initMore: IMore = {
        java: false,
        php: false,
        javasciprt: false
    }
    const [visible, setVisible] = React.useState(false);
    const [user, setUser] = React.useState(initDate);
    const [more, setMore] = React.useState(initMore);
    const handleOk = () => {
        setVisible(true);
    }
    const handleCancel = () => {
        setVisible(false);
    }
    const getMoreMessage = () => {
        let result: IMore = {
            java: false,
            javasciprt: false,
            php: false
        };
        result = {
            java: parseInt(user.key) % 2 === 0,
            javasciprt: parseInt(user.key) % 2 === 0,
            php: parseInt(user.key) % 2 != 0,
        }
        setMore(result);
    }
    React.useEffect(() => {
        getMoreMessage()
    }, [user.key])
    React.useImperativeHandle(ref, () => {
        return {
            handleOk: (record: dateSourceI) => {
                handleOk();
                setUser(record);
            }
        }
    })
    return (
        <>
            <Modal
                title={user.name}
                visible={visible}
                onOk={handleCancel}
                onCancel={handleCancel}
            >
                {user.name == '' ? <Spin /> :
                    <Descriptions title={`introduce ${user.name}`}>
                        <Descriptions.Item label="name">{user.name}</Descriptions.Item>
                        <Descriptions.Item label="address">{user.address}</Descriptions.Item>
                        <Descriptions.Item label="age">{user.age}</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="status">
                            {parseInt(user.key) % 2 === 0 ? <Badge status="success" /> : <Badge status="error" />}
                        </Descriptions.Item>
                        <Descriptions.Item label="language info">
                            Java:{more.java ? <Badge status="success" /> : <Badge status="error"></Badge>}<br />
                            php:{more.php ? <Badge status="success" /> : <Badge status="error"></Badge>}<br />
                            Javasciprt:{more.javasciprt ? <Badge status="success" /> : <Badge status="error"></Badge>}
                        </Descriptions.Item>
                    </Descriptions>}
            </Modal>
        </>
    )
})
export default Person;