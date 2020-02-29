import LOGIN_TYPE from "~/constants";
import { initialStateI } from '~/reducers/login';
import { message, Modal } from "antd";
import { Dispatch } from "redux";
interface User {
    userName: string,
    password: string
}
const asyncLogin = (params: User) => {
    return new Promise<initialStateI>((resolve) => {
        console.log(`${params.userName}请求登录`)
        const user: initialStateI = {
            userName: params.userName,
            age: 20,
            sex: 1
        };
        setTimeout(() => {
            resolve(user);
        }, 1000)
    })
}
const loginData = (data: initialStateI) => ({
    type: LOGIN_TYPE.LOGIN,
    payload: data
})
export const login = (params: User) => {
    return (dispatch: Dispatch) => {
        try {
            asyncLogin(params).then(response => {
                dispatch(loginData(response));
                Modal.success({
                    content: 'log in success',
                });
            });
        } catch{
            message.error('bad request!');
        }
    }
}