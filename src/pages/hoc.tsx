import * as React from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal'
export interface ImodalSetting {
    modalSetting?: ModalProps
}
function hocModal<T extends object>(Component: React.ComponentType<T>) {
    return class AAA extends React.Component<T & ImodalSetting> {
        render() {
            const { modalSetting, ...props } = this.props;
            return (
                <Modal
                    {...modalSetting}
                >
                    <Component {...props as T} ></Component>
                </Modal>
            )
        }
    }
}
export default hocModal;