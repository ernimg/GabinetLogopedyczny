import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {FaRegFileWord} from 'react-icons/fa';
import '../Style/FileSection.css';

class Materials extends Component{
 state = {
    files: [],
    loading: true
 }
    componentDidMount(){
        this.getFile();
    }
    getFile = () =>{
        axios.get(`https://afternoon-basin-77084.herokuapp.com/media/`)
        .then( file => {
            this.setState({
                files:file.data.results,
                loading: false
            })
    
        })
    }
    render(){
        console.log(this.state.files);
      const listFiles = this.state.files.map( file => (
        
            <div key={file.media_name} className="file">
                <div className="file__icon">
                    <FaRegFileWord className="file__icon-word"/>
                </div>
                <h2 className="file__tiltle-h2" >
                    {file.media_name.length > 20 ? `${file.media_name.substr(0,20)}...` : file.media_name}
                </h2>
                <div className="file__short-description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, quo id! Voluptate totam nulla quae, quia alias fuga quaerat. Voluptatum eos accusamus recusandae magnam itaque praesentium, dolor sed dolore rerum?
                    </p>
                </div>
                    <Link className="post__download" to={file.media_url} target="_blank" download>Pobierz</Link>          
            </div>
         ))
        return (
            <>
                <h1 className="file-zone-title">
                    Strefa Plików
                </h1>
                <div className="file-wrapper">
                {listFiles}
                </div>
            </>
        );
    }
}
export default Materials;