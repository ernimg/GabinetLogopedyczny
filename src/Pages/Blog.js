import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import PulseLoader from 'react-spinners/PulseLoader'
import { FaArrowLeft, FaUser} from 'react-icons/fa';
import img from '../Images/child.jpg';
import '../Style/post.css';

class Blog  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            message:"",
            id: props.match.params.id,
            piscture: "",
            loading: true
        };
      }

componentDidMount(){
    this.getMessage();
}
 getMessage = ()=>{
    axios.get(`https://afternoon-basin-77084.herokuapp.com/posts/${this.state.id}`)
    .then(message =>{
        console.log(message)
       this.setState({
        title:message.data.title,
        message: message.data.long_text,
        piscture: message.data.picture_url,
        loading: false
       }) 
    })

}

render() {
    
    const override =`
    height: 100px;
    width: 100px;
    text-align: center;
    line-height: 100px;
    `
    return (
        <>
          {
             this.state.loading ?
             <span className="loader"><PulseLoader  css={override}/></span>
             :
            <article className="post">
                <div className="post__header">
                {this.state.piscture ? 
                <img className="post__img" src={this.state.piscture} alt='blog-img'></img> :
                <img className="post__img" src={img} alt='blog-img'></img>
                }
                </div>
                <div class="post__body">
                    <h1 class="post__title">
                        {this.state.title}
                    </h1>

                    <div class="post__content">
                    <p class="post__content-paragraph">
                        {this.state.message}
                    </p>
                    </div>
                    <div className="post__nav">
                    <Link to="/blog">
                    <FaArrowLeft className="back-arrow"/>
                    </Link>     
                    </div>
                </div>

            </article>
          }
        </>
    );
}
}


export default Blog 