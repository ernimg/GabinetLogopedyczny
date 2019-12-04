import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PulseLoader from 'react-spinners/PulseLoader';
import {FaRegFileWord,FaFilePdf,FaImage} from 'react-icons/fa';
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
    changeIcon = (extension)=>{
        console.log(extension);
        if(extension === ".doc" || extension === ".docx" ){
            return <FaRegFileWord className="file__icon-word"/>;
        }else if(extension === ".pdf"){
            return <FaFilePdf className="file__icon-pdf"/>
        }else if(extension === ".jpg"){
            return <FaImage className="file__icon-img"/>
        }
    }
    render(){
        console.log(this.state.files);
        const word = `
        background-color: rgb(42, 86, 153);
        `
        const override =`
        height: 100px;
        width: 100px;
        text-align: center;
        line-height: 100px;
        `
      const listFiles = this.state.files.map( file => (
        
            <div key={file.media_name} className="file" >
                <div className="file__icon">  
                {this.changeIcon(file.extension)} 
                </div>
                <h2 className="file__tiltle-h2" >
                    {file.media_name.length > 20 ? `${file.media_name.substr(0,20)}...` : file.media_name}
                </h2>
                <div className="file__short-description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, quo id! Voluptate totam nulla quae, quia alias fuga quaerat. Voluptatum eos accusamus recusandae magnam itaque praesentium, dolor sed dolore rerum?
                    </p>
                </div>
                    <a className="post__download" href={file.media_url}>Pobierz</a>          
            </div>
         ))
        return (
            <>
            {
                this.state.loading ?
                <span className="loader"><PulseLoader  css={override}/></span>
                : 
                <div>
                    <h1 className="file-zone-title">
                    Strefa Plików
                    </h1>
                    <div className="file-wrapper">
                    {listFiles}
                    </div> 
                </div>
            }
            </>
        );
    }
}
export default Materials;