import React,{Component} from 'react';
import Post from '../Components/Post'
import {Link} from 'react-router-dom'
import axios from 'axios';

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
       this.setState({
        title:message.data.title,
        message: message.data.long_text
       }) 
    })

}

render() {
    

    return (
        <div>
            <h2>{this.state.title}</h2>
            <p>{this.state.message}</p>
            <Link to="/blog">
             powrót
            </Link> 
        </div>
    );
}
//     console.log(match.params.id);
// return(
//     <>
//     <div>
//         Strona postu
//     </div>
//     <Post />
//     <Link to="/blog">
//         powrót
//    </Link>
//     </>
// )
 
}


export default Blog 