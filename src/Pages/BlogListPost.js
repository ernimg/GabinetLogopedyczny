import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../Style/BlogListPost.css';
import axios from 'axios';
class Blog extends Component{

    state = {  
        posts: [],
        nextUrl: '',
        previousUrl: ''
    }
 
    componentDidMount() {
        this.getPost(`https://afternoon-basin-77084.herokuapp.com/posts/`);
    }

    getPost = (url) => {
        axios.get(url)
             .then( res => {
                console.log(res.data)
                 this.setState({
                     posts: res.data.results,
                     nextUrl: res.data.next,
                     previousUrl: res.data.previous
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
            <>
                <div className="Blog">
                    {posts}
                </div>
                <button type="button" disabled={!this.state.previousUrl} onClick={(event) => this.getPost(this.state.previousUrl)}>Poprzednia strona</button>
                <button type="button" disabled={!this.state.nextUrl} onClick={(event) => this.getPost(this.state.nextUrl)}>Następna</button>
            </>
        )
    }s
 
}


export default Blog 