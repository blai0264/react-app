import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import Header from './Header';
import  mySVG from './Loading.svg';

export default class Posts extends Component{
    constructor(){
        super();
          this.state = {
              list:[],
              error: null,
              posts: "Posts"
          }
      }
  
      buildList = (data) =>{
        this.setState({list: data})
      }
      
      componentDidMount(){
        let url = `https://jsonplaceholder.typicode.com/users/${this.props.match.params.userID}/posts`
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
            <h2>List of Posts</h2>
            <ul className="main">
              {
                this.state.list.length === 0 &&
                <li className="loading"><p>Loading data...</p><img src={mySVG}/></li>
              }
              {
                this.state.list.length > 0 &&
                 this.state.list.map((post) => (
                  <li key={post.id} className="person"><p className="postTitle">Post {post.id}</p><p className="description">{post.body}</p></li>
                 ))
              }
            </ul>
          
     
           </div>
        )
    }
}