import * as React from 'react';
import { Modal, Form, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { dateSourceI } from './list';
interface IProps {
    visible: boolean,
    data: dateSourceI,
    edit: boolean,
    handleClose: () => void,
    handleOk: (data: dateSourceI) => void
}
interface IState {
    dataSource: dateSourceI
}
interface MessageFormProps extends FormComponentProps {
    age: number;
    name: string;
    address: string;
    handleChange: (field: object) => void
}
export interface fieldsType {
    string: {
        name: string,
        value: string | number,
        dirty: boolean,
    },

}
class messageForm extends React.PureComponent<MessageFormProps> {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="name"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('age', {
                        rules: [{ required: true, message: 'Please input your age!' }],
                    })(
                        <Input
                            prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="age"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: 'Please input your address!' }],
                    })(
                        <Input
                            prefix={<Icon type="car" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="address"
                        />,
                    )}
                </Form.Item>
            </Form >
        )
    }
}
const WarpMessageForm = Form.create<MessageFormProps>({
    onValuesChange(_, values) {
        _.handleChange(values)
    },
    mapPropsToFields(props) {
        return {
            name: Form.createFormField({
                value: props.name,
            }),
            age: Form.createFormField({
                value: props.age,
            }),
            address: Form.createFormField({
                value: props.address,
            })
        };
    },
})(messageForm)
class Add extends React.Component<IProps, IState> {
    formRef: React.RefObject<any> = React.createRef();
    constructor(props: IProps) {
        super(props);
        this.state = {
            dataSource: {
                key: '',
                name: '',
                age: 0,
                address: '',
            }
        }
    }
    componentDidUpdate(prevProps: IProps) {
        if (!prevProps.visible && this.props.visible) {
            this.setState({
                dataSource: this.props.data
            })
        }
    }
    handleChange = (field: object) => {
        const { dataSource } = this.state;
        let copyData = JSON.parse(JSON.stringify(dataSource));
        this.setState({
            dataSource: {
                ...copyData,
                ...field
            }
        })
    }
    resetData = () => {
        this.setState({
            dataSource: {
                key: '',
                name: '',
                age: 0,
                address: '',
            }
        })
    }
    handleOk = () => {
        const { dataSource } = this.state;
        this.formRef.current.validateFields().then(() => {
            let copyData = JSON.parse(JSON.stringify(dataSource));
            parseInt(copyData.age)
            this.props.handleOk(copyData);
            this.resetData();
        }).catch((err: any) => {
            console.log(err);
        })
    }
    handleCancel = () => {
        this.resetData();
        this.props.handleClose();
    }
    render() {
        const { visible } = this.props;
        const { dataSource } = this.state;
        return (
            <Modal
                title="add new data"
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <WarpMessageForm {...dataSource} ref={this.formRef} handleChange={this.handleChange} />
            </Modal>
        )
    }
}
export default Add;