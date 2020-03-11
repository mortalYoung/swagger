import * as React from 'react';
import { Descriptions, Badge } from 'antd';
import { dateSourceI, IMore } from './list';
import hocModal, { ImodalSetting } from './hoc';
interface IProps {
    user?: dateSourceI & IMore,
}
const defaultUser = {
    address: '',
    name: '',
    age: 0,
    key: '',
    java: false,
    php: false,
    javasciprt: false
}
@hocModal
class EnhancePerson extends React.PureComponent<IProps & ImodalSetting> {
    render() {
        const { user = defaultUser } = this.props;
        return (
            <Descriptions title={`introduce ${user.name}`}>
                <Descriptions.Item label="name">{user.name}</Descriptions.Item>
                <Descriptions.Item label="address">{user.address}</Descriptions.Item>
                <Descriptions.Item label="age">{user.age}</Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="status">
                    {parseInt(user.key) % 2 === 0 ? <Badge status="success" /> : <Badge status="error" />}
                </Descriptions.Item>
                <Descriptions.Item label="language info">
                    Java:{user.java ? <Badge status="success" /> : <Badge status="error"></Badge>}<br />
                            php:{user.php ? <Badge status="success" /> : <Badge status="error"></Badge>}<br />
                            Javasciprt:{user.javasciprt ? <Badge status="success" /> : <Badge status="error"></Badge>}
                </Descriptions.Item>
            </Descriptions>
        )
    }
}
export default EnhancePerson;