import React from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/postActions";
import Loader from "./Loader";

export default function FetchedPosts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) =>
        state.posts.fetchedPosts
    );
    const loading = useSelector(state => state.app.loading);
    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return (
            <>
                <p>List is empty</p>
                <button
                    className={'btn btn-primary btn-sm'}
                    onClick={() => dispatch(fetchPosts())}
                >Load posts
                </button>
            </>
        )
    }
    return posts.map((post) =>
        <Post post={post} key={post.id}/>)
}
