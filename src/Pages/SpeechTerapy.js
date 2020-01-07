import React,{Component} from 'react';
import '../Style/Apoitment.css';
import axios from "axios";
class SpeetchTeraphy extends Component{
    state = {
        ApoitmentData:[

        ]
    }
    componentDidMount(){
        this.getVisit();
    }

    getVisit = ()=>{
        axios.get(`https://afternoon-basin-77084.herokuapp.com/visits/`)
        .then(response =>{
            console.log(response.data)

        })
    
    }
    render() {
        return (
            <div className="apoitments">
                <div class="calendar">
                    <div class="frame">
                    <div class="left screw">
                        <div class="line"></div>
                        <div class="shine"></div>
                    </div> 
                    <div class="right screw">
                        <div class="rerotate line"></div>
                        <div class="shine"></div>
                    </div>
                    <div class="year">
                        <h1 id="yearCaption">2020</h1>
                    </div>
                    </div>
                    
                    <div class="content">
                    <h2 id="monthCaption">Październik</h2>
                    <h1 id="dayCaption">28</h1>
                    </div>
                    
                    <div class="over"></div>
                </div>
            </div>
        );
    }
}
export default SpeetchTeraphy;