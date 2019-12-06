import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PulseLoader from 'react-spinners/PulseLoader';
import img from '../Images/child.jpg';
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa';
import '../Style/BlogListPost.css';

class Blog extends Component{

    state = {  
        posts: [],
        nextUrl: '',
        previousUrl: '',
        loading: true
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
                     previousUrl: res.data.previous,
                     loading: false
                 }) 
             })
    }

    render() {
        console.log(this.state.posts);
       const override =`
       height: 100px;
       width: 100px;
       text-align: center;
       line-height: 100px;
       `
        const posts = this.state.posts.map(post => (

            <Link className="Blog-link" key={post.id}  to={`/blog/post/${post.id}`}>
                <div className="Blog-post">
                     <h2 className="Blog-post-title" >{post.title}</h2>
                    <div className="bar clearfix">
                        <h3 className="Blog-post-author" >Joanna Zacniewska</h3>
                        <h6 className="Blog-post-date">
                            {post.published_date}
                        </h6>  
                    </div>   
                    <p className="Blog-post-text">
                        {post.long_text.length > 200 ? `${post.long_text.substr(0,200)}...` : post.long_text}
                    </p>
                </div>
                <img className="Blog-img-item" src={img} alt='blog-img'></img>
            </Link>


        ))
        return (
            <>
                {
                    this.state.loading ?
                    <span className="loader"><PulseLoader  css={override}/></span>
                    :
                    <div className="Blog">
                      {posts}
                      <div className="Blog-paginatiom">
                         <button className="Blog-left-btn" type="button" disabled={!this.state.previousUrl} onClick={(event) => this.getPost(this.state.previousUrl)}><FaArrowCircleLeft className="b-l"/></button>
                        <button className="Blog-right-btn" type="button" disabled={!this.state.nextUrl} onClick={(event) => this.getPost(this.state.nextUrl)}><FaArrowCircleRight className="b-r"/></button>
                      </div>
                    </div>
                }
            </>
        )
    }s
 
}


export default Blog 