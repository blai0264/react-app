import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';

class Header extends Component {
  constructor(props){
   super();
   setTimeout(()=>{
    let home = (this.props.home)
    if (home){
      this.refs.button.hidden = true;
    }
   }, 10)
   
  }
  render() {
    
    return (
        <nav>
         <h1 ref="h1">React Midterm<br/>
         <NavLink to="/"><button ref="button" onClick={this.hideButton} className="home">Go Home</button></NavLink>
         </h1> 
         </nav>       
    );
  }
}

export default Header;