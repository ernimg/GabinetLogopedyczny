import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { FaArrowLeft, FaUser} from 'react-icons/fa';
import '../Style/post.css';

class Blog  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            message:"",
            id: props.match.params.id
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
        message: message.data.long_text
       }) 
    })

}

render() {
    

    return (
        <>
          
            <article className="Post-wrapper">
                <div className="dataBar clearfix">
                    <FaUser className="dataBar-avatar"/>
                    <h3 className="dataBar-title">Joanna Zacniewska</h3>
                    <h6 className="dataBar-date">data</h6>
                </div>
                <div>
                    social dataBar
                </div>
                <div>
                    <h2 className="post-title" >{this.state.title}</h2>
                    <p className="post-text">{this.state.message}</p>
                    <Link to="/blog">
                    <FaArrowLeft className="back-arrow"/>
                    </Link> 
                </div>
            </article>
        </>
    );
}
}


export default Blog 