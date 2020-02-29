import LOGIN_TYPE from '../constants';
enum Sex {
    'male',
    'female'
}
export interface initialStateI {
    userName: string,
    sex: Sex,
    age: number
}
interface IAction {
    type: string,
    payload: initialStateI
}
const initialState: initialStateI = {
    userName: '',
    sex: 0,
    age: 0
}
export default function login(state = initialState, action: IAction) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_TYPE.LOGIN:
            return Object.assign({}, state, {
                user: payload
            });
        default:
            return state;
    }
}
