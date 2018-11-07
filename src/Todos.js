import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import Header from './Header';
import mySVG from './Loading.svg';
export default class Todos extends Component{
    constructor(){
        super();
          this.state = {
              list:[],
              error: null,
              todos: "Todos"
          }

      }
  
      buildList = (data) =>{
        this.setState({list: data})
      }
      
      componentDidMount(){
        let url = `https://jsonplaceholder.typicode.com/users/${this.props.match.params.userID}/todos`
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error=>{
          this.setState({error:error})
        })
      }

    
    
    render(){
        return(
          
            <div>
              <Header/>
              <h2>List of Todos</h2>
            <ul className="main">
              {
                this.state.list.length === 0 &&
                <li className="loading"><p>Loading data...</p><img src={mySVG}/></li>
              }
              {
                this.state.list.length > 0 &&
                 this.state.list.map((todo) => (
                  <li key={todo.id} className="todo"><p className="todoTitle">Task: {todo.title}</p><p className="completed">Completed: {todo.completed.toString()}</p></li>
                 ))
              }
            </ul>
          
     
           </div>
        )
    }
}