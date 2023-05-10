import { Component } from "react"
import Table from "./Table";
import './index.css';

class App extends Component{

  state = {
    charccs : [{
      name:'akash',
      job:'IT',
  },  
{
  name: 'prem',
  job: 'IT',
},
{
name:'arun',
job:'Software',
},
{
name:'Balaji',
job:'Manager',
},]

  }
  removecharcc = (index)=>{
    const {charccs} = this.state
    let filtered = charccs.filter((character,i)=>{
      return i!==index

    });
    this.setState({charccs:filtered});
  }
    render(){
      const {charccs} = this.state
      
      return(
        <div className="container">
          <h1>Table</h1>
          <Table removecharcc = {this.removecharcc} charccdata ={charccs}/>
        </div>
      )
    }
  }
  export default App;