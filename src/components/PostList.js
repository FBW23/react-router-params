import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
    state = {
        posts: []
    }
        
         
    

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
            this.setState({ posts })
        })
    }


    render() { 

        let posts = this.state.posts;
        let jsxList = posts.map(post => (
            <div className="post">
            <h3>{post.title}</h3>
            <button><Link to={`/PostDetail/${post.id}`}>読み上げる</Link></button>
            </div>
        ))

        return ( 
        <div className="listPosts">
            {jsxList}
        </div> );
    }
}
 
export default PostList;