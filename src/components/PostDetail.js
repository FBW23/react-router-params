import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: []
         }
    }

    componentDidMount() {
        let postId = this.state.id;
        console.log(postId)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(post => {
            this.setState({ post })
        })
    }


    render() { 

        let text = this.state.body;
        console.log(text)

        return ( 
        <div className="body" key={this.state.id}>
            <p>{this.state.body}</p>
            <button><Link to="/">うしろ</Link></button>
        </div> );
    }
}
 
export default PostDetail;