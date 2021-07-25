import { createAction, handleActions } from "redux-actions";
import createRequestThunk, { createRequestActionTypes } from "../lib/createRequestThunk";
import * as authAPI from '../lib/api/auth';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK'
);

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createRequestThunk(CHECK, authAPI.check);

const initialState = {
    user: null,
    checkError: null
};

const user = handleActions(
    {
        [TEMP_SET_USER]: (state, {payload: user}) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, {payload: user}) => ({
            ...state,
            user,
        }),
        [CHECK_FAILURE]: (state, {payload: error}) => ({
            ...state,
            user: null,
            checkError: error
        })
    },
    initialState
);

export default user;