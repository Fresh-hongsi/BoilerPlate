import {
    LOGIN_USER, 
    REGISTER_USER, 
    AUTH_USER
} from '../_actions/types';

// reducer는 현재 state와 action object를 받은 후에  next state를 return하는 역할
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            // ...은 위에 parameter의 state를 똑같이 가져오는 역할
            // loginSuccess에는 user_action.js에서의 payload를 넣어주는 역할
            return {...state, loginSuccess: action.payload}
            break;

        case REGISTER_USER:
            return { ...state, register: action.payload}
            break;


        case AUTH_USER:
            return { ...state, userData: action.payload}
            break;

        default:
            return state;
            
    }
}