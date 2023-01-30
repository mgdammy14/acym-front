import {axiosConnect } from '../helpers/axios'
import { LOGIN_PATH } from './path.env';

const API = axiosConnect();

export const postLogin = async (username: string, password: string) => {
    const {data} = await API.post(LOGIN_PATH, {username, password});
    return data;
}