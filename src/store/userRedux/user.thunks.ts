import {AppDispatch} from "..";
import { setError, setLoading, setLoggedIn, setToken, setUser } from "./user.slice";
import {postLogin} from '../../services/user.service'

export const loginThunk = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const data = await postLogin(username, password);
        dispatch(setToken(data.objModel.token));
        dispatch(setLoggedIn(data.objModel.token ? true : false));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError("Invalid username or password"));
        dispatch(setLoading(false));
    }
}
