import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
export default class Person extends Component{
    constructor(props){
        super(props);
        this.state = {
                id: this.props.person.id, 
                name: this.props.person.name, 
                email: this.props.person.email
                

        }
    }

    goToPosts = (ev) => {
        let id = this.state.id
        this.props.history.push(`/users/${id}/posts`)
    }

    goToTodos = (ev) => {
        let id = this.state.id
        this.props.history.push(`/users/${id}/todos`)
    }

    render(){

        return(
        <li className="person">
            <div>
            <div className="labels">
            <p ref="nameLabel" className="nameLabel">Name: {this.state.name}</p>
            <p ref="verseLabel" className="verseLabel">Email: {this.state.email}</p>
            </div>
            <div className="buttons">
            <button onClick={this.goToPosts}>Posts</button>
            <button onClick={this.goToTodos}>Todos</button>
            </div>
            </div>
        </li>
        )
    }
}
