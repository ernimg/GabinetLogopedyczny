import React from 'react';
import Post from '../Components/Post'
import {Link} from 'react-router-dom'

const Blog  = ({match})=>{
    console.log(match);
return(
    <>
    <div>
        Strona postu
    </div>
    <Post />
    <Link to="/blog">
        powrót
   </Link>
    </>
)
 
}


export default Blog 