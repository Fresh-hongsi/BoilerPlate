import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function loginUser(dataTosubmit) {
        // server 폴더에 있는 index.js에서 app.post가 있는 위치에 설정된 경로인
        // /api/users/login과 똑같이 맞춰준다.
        const request = axios.post('/api/users/login', dataTosubmit)
            .then(response => response.data)

        return {
            type: LOGIN_USER,
            payload: request
        }
}


export function registerUser(dataTosubmit) {
    // server 폴더에 있는 index.js에서 app.post가 있는 위치에 설정된 경로인
    // /api/users/register과 똑같이 맞춰준다.
    const request = axios.post('/api/users/register', dataTosubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function auth() {
    // server 폴더에 있는 index.js에서 app.post가 있는 위치에 설정된 경로인
    // /api/users/register과 똑같이 맞춰준다.
    const request = axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}