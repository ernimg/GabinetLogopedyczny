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
   
        if(extension === ".doc" || extension === ".docx" ){
            return  <div className="file__icon"><FaRegFileWord  className="file__icon-word"/></div>
        }else if(extension === ".pdf"){
            return <div className="file__pdf"><FaFilePdf className="file__icon-pdf"/></div>
        }else if(extension === ".jpg"){
            return <div className="file__jpg"><FaImage className="file__icon-jpg"/></div> 
        }
    }

    render(){
        console.log(this.state.files);

        const override =`
        height: 100px;
        width: 100px;
        text-align: center;
        line-height: 100px;
        `
      const listFiles = this.state.files.map( file => (
        
            <div key={file.media_name} className="file" >
                {this.changeIcon(file.extension)} 
                <h2 className="file__tiltle-h2" >
                    {file.media_name.length > 20 ? `${file.media_name.substr(0,20)}...` : file.media_name}
                </h2>
                <div className="file__short-description">
                    <p>
                       {file.media_description}
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
                    <div className="file-zone">
                        <h1 className="file-zone-title">
                            Strefa Plików
                        </h1>
                    </div>
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