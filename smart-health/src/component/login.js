import React from "react";
import './login.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Button } from "react-bootstrap";
const login=()=>{
    return(
        <div className="Login">
        <div className='head1'><h1>LOG IN </h1></div>
          <div className='box1'>
          <img src="https://ga.berkeley.edu/wp-content/uploads/2015/08/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" class="im"/>
             <form>
               <br></br>
                <label>
                  User Name:
                    <input type="text" name="name" className='box1inp'/>
                </label>
                <br></br>
                <label>
                  <br></br>
                  Password:
                    <input type="password" name="name" className='box1inp'/>
                </label>
                <br></br>
                <Link to="/user_home"><input type="submit" value="Submit" className='submit' /></Link>
                <br></br>
            </form>
            </div>
            <Link to='/'><Button variant="dark" className='but' >Home</Button></Link>
            </div>  
    );
}

export default login;