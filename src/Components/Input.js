import React from "react";
 import"../Style/Input.css";


const Input = (props)=>{
    let inputElement = null;
    switch(props.elementType){
        case('input'):
        inputElement = <input 
            className = "InputElement apoitement" 
            {...props.elementConfig} 
            value = {props.value}
            onChange = {props.setInputValue}
            />;
        break;
        case('textarea'):
        inputElement = <textarea 
            className = "InputElement messageText " 
            {...props.elementConfig} 
            value = {props.value}
            onChange = {props.setInputValue}
            />;
        break;
        case('select'):
        inputElement =(
            <select 
            className = "InputElement select" 
            value = {props.value}
            onChange = {props.setInputValue}>
            {props.elementConfig.options.map(option =>(
              <option key = {option.value} value = {option.value}>
                  {option.display}
              </option>  
            ))} 
        </select>
        )
        break;
        default:
            inputElement = <input
             className = "InputElement" 
             {...props.elementConfig}
              value = {props.value} />
    }
return(
    <div  className = "Input">  
        <label className = "Label">{props.label}</label>
        {inputElement}
    </div>
)
}
export default Input;