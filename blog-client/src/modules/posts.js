import createRequestThunk, { createRequestActionTypes } from "../lib/createRequestThunk";
import * as postsAPI from '../lib/api/posts';
import { handleActions } from "redux-actions";

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] = createRequestActionTypes('posts/LIST_POSTS');

export const listPosts = createRequestThunk(LIST_POSTS, postsAPI.listPosts);

const initialState = {
    posts: null,
    error: null,
};

const posts = handleActions(
    {
        [LIST_POSTS_SUCCESS]: (state, {payload: posts}) => ({
            ...state,
            posts
        }),
        [LIST_POSTS_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error
        })
    },
    initialState
);

export default posts;