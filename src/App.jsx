import React from "react";
import './App.css'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = { count:0}
  }

  increment = () =>{
    this.setState ({count: this.state.count+1})
  }

  decrement = () =>{
    if(this.state.count>0){
    this.setState ({count: this.state.count-1})
    }
  }

  reset = () =>{
    this.setState ({count:0})
  }

  render(){
    return(
      <div className="main">
        <h1>Counter App</h1>
        <div className="Zero">{this.state.count}</div>
        <div>
          <button  onClick={this.increment}>+</button>
          <button  onClick={this.decrement}>-</button>
          <button  onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}