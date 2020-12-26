import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";

function LocalPosts ({ posts }) {
    if (!posts.length) {
        return (
            <p>List is empty</p>
        )
    }
    return posts.map((post, index)=>
        <Post post = { post } key={ post.id }/>)
}

const mapStateToProps = state => {
    return {
        posts: state.posts.localPosts
    }

}

export default connect(mapStateToProps, null)(LocalPosts);
