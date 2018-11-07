import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Person from './Person';
import './App.css';
import mySVG from './Loading.svg';


class Home extends Component {
    constructor(){
      super();
        this.state = {
            list:[],
            error: null,
            home: "Home"
        }
    }

    buildList = (data) =>{
      this.setState({list: data})
    }
    
    componentDidMount(){
      let url = 'https://jsonplaceholder.typicode.com/users'
      fetch(url)
      .then(response => response.json())
      .then(this.buildList)
      .catch(error=>{
        this.setState({error:error})
      })
    }

    render() {
    return (
      <div>
       <Header home={this.props.match.path}/>
       <h2>List of Users</h2>
       <ul className="main">
         {
           this.state.list.length === 0 &&
           <li className="loading"><p>Loading data...</p><img src={mySVG}/></li>
         }
         {
           this.state.list.length > 0 &&
            this.state.list.map((person) => (
              <Person history={this.props.history} key={person.id} person={person}/>
            ))
         }
       </ul>
     

      </div>
    );
  }
}

export default Home;
