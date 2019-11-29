import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../Style/BlogListPost.css';
import axios from 'axios';
import img from '../Images/child.jpg';
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
                 this.setState({
                     posts: res.data.results,
                     nextUrl: res.data.next,
                     previousUrl: res.data.previous
                 }) 
             })
    }

    render() {
        const posts = this.state.posts.map(post => (
            <Link className="Blog-link" key={post.id} message ={post.lo} to={`/blog/post/${post.id}`}>
                <div className="Blog-post">
                     <h2 className="Blog-post-title" >{post.title}</h2>
                    <div className="bar clearfix">
                        <h3 className="Blog-post-author" >Joanna Zacniewska</h3>
                        <h6 className="Blog-post-date">
                            {post.published_date}
                        </h6>  
                    </div>   
                    <p className="Blog-post-text">
                        {post.long_text.length > 210 ? `${post.long_text.substr(0,210)}...` : post.long_text}
                    </p>
                </div>
                <img className="Blog-img-item" src={img} alt='blog-img'></img>
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