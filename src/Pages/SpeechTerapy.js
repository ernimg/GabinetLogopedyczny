import React,{Component} from 'react';
import '../Style/Apoitment.css';
import Input from '../Components/Input';
import Box from '../Components/Box';
import CloseForm from '../Components/CloseFrom';
import FormBtn from '../Components/FormBtn';
import PulseLoader from 'react-spinners/PulseLoader';
import axios from "axios";
class SpeetchTeraphy extends Component{
    state = {
        results:[],
        register:{
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
            delivery:{
                elementType:'select',
                elementConfig:{
                    options: [
                        {value:'fasten', display:'Fasten'},
                        {value:'chepaest', display:'Cheapest'}
                    ]
                },
                value: null
            }
        },
        open:false,
        loading:true
    }
    componentDidMount(){
        this.getVisit();
    }

    getVisit = ()=>{
        axios.get(`https://afternoon-basin-77084.herokuapp.com/visits/`)
        .then(response =>{
            this.setState({
                results:response.data,
                loading: false
            })
        })
    }
    /*

       UPDATE STATE INSERT DATE
        
    */ 
    inputHandler = (event,idInput)=>{
        console.log('DZIAŁAM');
        const register = {
            ...this.state.register
        };
        const registerUpdate = {
            ...register[idInput]
        };
        registerUpdate.value  = event.target.value;
        register[idInput]  = registerUpdate;

        this.setState({register});
        console.log(this.state.register);
    }
    openForm = (card)=>{
        const hours = card.app.map(app => ({display : app.appointment_time, value: app.id}));
        var newRegister = this.state.register;
        newRegister.delivery.elementConfig.options = hours;
        newRegister.delivery.value = hours[0].value;
        console.log(hours);
        this.setState({
            open: true,
            register: newRegister
        })
    }
    closeForm = ()=>{
        this.setState({
            open: !true
        })
    }

    groupBy = (array, f) => {
        var groups = {};
        array.forEach(element => {
            var group = JSON.stringify(f(element));
            groups[group] = groups[group] || {day: element.day, app: [], month: element.month, year: element.year, numericMonth: this.formatDate(element)};
            groups[group].app.push(element);
        });
        return Object.keys(groups).map(group => {
            return groups[group]
        });
    }

    formatDate = element => {
        const dates = {
            "Styczeń": 0,
            "Luty": 1
        };
        return new Date(element.year, dates[element.month], element.day);
    }
    goRegister = (event)=>{
        event.preventDefault();
        const fromData = {};
        var app = {};
        app.name = this.state.register.name.value;
        app.surname = this.state.register.surname.value;
        app.email = this.state.register.email.value;

 
        axios.patch('https://afternoon-basin-77084.herokuapp.com/visits/' + this.state.register.delivery.value + '/', 
        JSON.stringify(app), 
        {headers: {'Content-Type': 'application/json'}})
          .then(function (response) {
            console.log(response);
        })
    }

    render() {
         
        const result = this.groupBy(this.state.results, elem => {
            return [elem.month, elem.day];
        }).sort((a,b) => a.numericMonth - b.numericMonth);
        console.log(result);

        /*

        CREATE INPUTS ARRAY
        
        */ 
        const ElementsArr = [];
        for (const key in this.state.register) {
            ElementsArr.push({
                id: key ,
                config:this.state.register[key]
               });
        }
        console.log(ElementsArr);

        
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
                    <div className="apoitments">
                        <div className={this.state.open ? "fromAside active": "fromAside"} >
                        <CloseForm  close={this.closeForm}/>
                        <form className="register__form" onSubmit = {this.goRegister}>
                        {ElementsArr.map(formElement =>(
                            <Input 
                            className="apoitment__inputs"
                            key = {formElement.id}
                            elementType = {formElement.config.elementType} 
                            elementConfig = {formElement.config.elementConfig} 
                            value ={formElement.config.value} 
                            setInputValue = {(event) => this.inputHandler(event,formElement.id)}
                            /> 
                        ))}
                        <FormBtn
                        className="form_btn2"
                        />
                        </form>
                        </div>
                        <div className="apoitments__l1">
                        <Box
                            openFrom={this.openForm}
                            result ={result}
                        />
                        </div>
                    </div>
                }
            </>
        );
    }
}
export default SpeetchTeraphy;