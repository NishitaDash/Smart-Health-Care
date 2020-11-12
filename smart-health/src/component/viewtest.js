import React from 'react';//,{Component} 
import "./inventory.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import {useEffect,useState} from 'react';
  const uploadtest=()=>{
    return (

      <div className="thisisit">
      <div className="details">
        <Link to ="/staff-front"><Button className="home">Home</Button></Link>
        <h1>View test report</h1>
        <form id="myForm" onSubmit={(e)=>submit_view_test(e)}>
          <div className="start">
        
            <h5>Patient ID</h5>
            <input id="pid5"></input>
            <Button>Enter</Button>
            <br></br>
            <br></br>

          </div>
            
        </form>
      </div>
      </div>
       
    );
  }
  function submit_view_test(e){
    e.preventDefault();
    let request =  {
      pid5:document.getElementById('pid5').value,
    }
    axios.post('http://localhost:3001/test_report',request)
    .then(resp=>{
      alert(resp.data.message);
    })
    .catch(err=>{
      console.log(err);
    })
  }
/*
  class RandomPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {},
        };
    }
    async componentDidMount() {
        const res = await axios.get('/test_report');
        this.setState({ response: res.data })
    }
    render() {
        return (
            <div>
                {this.state.response}
            </div>
        );
    }
}
export {RandomPlace};*/
export default uploadtest;