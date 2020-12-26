import {CREATE_POST, FETCH_POSTS} from "./types";

const initState = {
    localPosts: [],
    fetchedPosts: []
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                localPosts: [...state.localPosts, action.payload]
            }
        case FETCH_POSTS:
            return  {
                ...state,
                fetchedPosts: action.payload
            }
        default:
            return state;
    }
}
