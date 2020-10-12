import React, {Component} from 'react'
import Table from './Table'

class Clock extends Component {
    state = {
        timer: 0,
        timerInterval: 1,
        pastTimes: [],
        on: false
    };
    componentDidMount() {
        document.addEventListener('keydown', this.startTimer);
      }
    startTimer = (event) =>{
        if (event.keyCode === 32 && !this.state.on){
            this.setState({
                timer: 0,
                timerInterval: 1,
                on:true})
            this.timerID = setInterval(() =>this.tick(),this.state.timerInterval);
        }else if(event.keyCode === 32 && this.state.on){
            this.setState({
                timerInterval:0,
                pastTimes: [...this.state.pastTimes,this.state.timer],
                on:false})
        }
    }    
    tick(){
        const newTimer = (parseFloat(this.state.timer) + parseFloat(this.state.timerInterval/1000)).toFixed(3);
        this.setState({timer: newTimer});
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.timer}</h1>
                <Table characterData = {this.state.pastTimes}/>
            </div>
            
        );
    }
}
export default Clock