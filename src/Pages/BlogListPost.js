import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../Style/BlogListPost.css';
import axios from 'axios';
class Blog extends Component{

    state = {  
        posts: []
    }
 
    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        axios.get(`http://127.0.0.1:8000/posts`)
             .then( res => {
                
                 this.setState({
                     posts: res.data.results
                 }) 
                //  console.log(this.state.posts);
             })
    }

    render() {
        const posts = this.state.posts.map(post => (
            <Link key={post.id} to={`/blog/post/${post.id}`} >
                <div className="Blog-post">
                     <h2>{post.title}</h2>
                     <div>
                         <p>
                            {post.long_text} 
                         </p>
                     </div>
                     <div>
                        {post.published_date}
                     </div>
                </div>
            </Link>
        ))
        return (
            <div className="Blog">
                {posts}
            </div>
        )
    }
 
}


export default Blog 