import React from 'react';
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {createPost} from "../redux/postActions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault();
        const {title} = this.state;

        if (!title.trim()) {
            return toast.info("Title is empty", {
                position: toast.POSITION.TOP_LEFT
            });
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }
        this.props.createPost(newPost);
        this.setState({
            title: ""
        })
    }

    changeInputHandler = (event) => {
        this.setState(prev => ({
            ...prev,
            ...{[event.target.name]: event.target.value}
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <ToastContainer autoClose={2000}/>
                <div className={'form-group'}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className={'form-control'}
                        id='title'
                        name={'title'}
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className={'btn btn-success btn-sm mt-2'} type={'submit'}>Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost,
}

export default connect(null, mapDispatchToProps)(PostForm);
