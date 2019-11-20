import React,{Component} from 'react';
import Input from '../Components/Input';
import FormBtn from '../Components/FormBtn';
import  '../Style/ContactForm.css';
import styled from 'styled-components'
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import  {faPhoneAlt,faEnvelopeOpenText,faGlobeEurope, faCaretSquareRight} from '@fortawesome/free-solid-svg-icons';
import Recaptcha from 'react-recaptcha';
library.add(faPhoneAlt,faEnvelopeOpenText,faGlobeEurope,faCaretSquareRight);

class Contact extends Component {

    state = {
        contactForm:{

            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Imie"
                },
                value:''
            },
            surname:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Nazwisko"
                },
                value:''
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:"Email"
                },
                value:''
            },
            tel:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Telefon"
                },
                value:''
            },
            messages:{
                elementType:'textarea',
                elementConfig:{
                    type:'text',
                    placeholder:"Wiadomość ..."
                },
                value:''
            }
            // delivery:{
            //     elementType:'select',
            //     elementConfig:{
            //         options: [
            //             {value:'fasten', display:'Fasten'},
            //             {value:'chepaest', display:'Cheapest'}
            //         ]
            //     }
            // }
        }  
    }

    validCaptcha = false;

    inputHandler = (event,idInput)=>{
        const contactForm = {
            ...this.state.contactForm
        };
        const contactFormUpdate = {
            ...contactForm[idInput]
        };
        contactFormUpdate.value  = event.target.value;
        contactForm[idInput]  = contactFormUpdate;

        this.setState({contactForm});
    }
s
    messagesDeliveryHandler = (event)=>{
        event.preventDefault();

        if (!this.validCaptcha) {
            alert('Ogarnij captche');
        }
        const fromData = {};
        for (const formElementsId in this.state.contactForm) {
            fromData[formElementsId] = this.state.contactForm[formElementsId].value;
        }
      axios.post('http://localhost:8080/api/contacts', 
      JSON.stringify(fromData), 
      {headers: {'Content-Type': 'application/json'}})
        .then(function (response) {
            alert(response.data.message);
      })
    }
    sucessCaptchaHandler = (response) =>{
        console.log(response);
        this.validCaptcha = true;
    }
    render(){
        const ElementsArr = [];
        for (const key in this.state.contactForm) {
            ElementsArr.push({
                id: key ,
                config:this.state.contactForm[key]
               });
        }
        const BtnStyle = styled(FormBtn)`
        outline: none;
        width: 300px;
        padding: 25px 0;
        font-size: 18px;
        border: 2px solid #08AA57;
        border-radius: 10px;
        color: #ddd;
        margin: 30px auto 0 auto;
        background-color: transparent;
        transition: .3s;
        &:hover {
            background-color: #08AA57;
            font-size: 19px;
          }
      `;
        return(
            <>
                <div className = "contact-mask"></div>
                <div className="contact">
                    <div className="contact__item0"> 
                        <h2 className="contact__item0-slogan">Skontaktuj się ze mną</h2>
                        <p className="contact__item0-description" >Potrzebujesz konkretnej usługi? Napisz do mnie, jestem do dyspozycji od poniedziałku do piątku. W godzinach od 8 do 16. </p>
                    </div>
                    <div className = "contact__item1">
                        <form className="contact__item1-form" onSubmit = {this.messagesDeliveryHandler}>
                            {ElementsArr.map(formElement =>(
                                <Input 
                                key = {formElement.id}
                                elementType = {formElement.config.elementType} 
                                elementConfig = {formElement.config.elementConfig} 
                                value ={formElement.config.value} 
                                setInputValue = {(event) => this.inputHandler(event,formElement.id)}
                                /> 
                            ))}
                            <div className="captcha">
                            <Recaptcha
                                sitekey="6Le1gsIUAAAAAFFGLqChNct2qYGoi1LJsa67Mmid"
                                render="explicit"
                                verifyCallback={this.sucessCaptchaHandler}
                            />
                            </div>
                            <BtnStyle/>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default Contact;