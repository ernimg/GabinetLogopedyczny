import React,{Component} from "react";
import queryString from 'query-string';
import axios from 'axios';

class Confirmation  extends Component{
     state = {
        message:"",
        error:""
     }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        console.log(values.token);
        console.log(values.id);
        if (values.token === undefined || values.id === undefined) {
            console.log('Brak parametru');
            return;
        }

        this.sendConfirmation(values.token, values.id);
    }

   

    sendConfirmation = (token, id) => {
        console.log(token);
       const confirmationToken = {
            "token": token
        }
        axios.patch(`https://afternoon-basin-77084.herokuapp.com/visits/${id}/`,confirmationToken)
        .then(message =>{
            this.setState({
                message 
            })
        }).catch(error => {
            this.setState({
                error
            })
        })
    }
    
    
    
    render() {
         return (
             <div>
                 {this.state.message ? <div>{this.state.message}</div> : <div>{this.state.error}</div> }
             </div>
         );
     }


}

export default Confirmation;