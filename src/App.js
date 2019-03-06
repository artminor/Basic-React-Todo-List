import React, { Component } from 'react';
import{BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state={
    todos:[
      // {
      //   id: uuid.v4(),
      //   title: 'Code',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Take a break',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Meeting',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res=> this.setState({todos:res.data}))
  }

//toggle completion
markComplete=(id)=>{
  this.setState({todos:this.state.todos.map(todo =>{
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo;
  }
    )});
}

//Delete Todo
delTodo=(id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
  }));

}

addTodo=(title)=>{
  // const newTodo={
  //   id:uuid.v4(),
  //   title,
  //   completed:false
  // }
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title, completed:false
  })
  .then(res=>
  this.setState({
    todos:[...this.state.todos, res.data]
  })); 
}


  render() { //life cycle method
    return (
      //jsx
      <Router>
      <div className="App"> 
      <div className="container">
          <Header/>
          < Route  exact path = "/" render={props=>(
          < React.Fragment > 
              < AddTodo addTodo = {
                this.addTodo
              }
              /> 
              <Todos todos = {
                this.state.todos
              }
              markComplete = {
                this.markComplete
              }
              delTodo = {
                this.delTodo
              }/>
              </React.Fragment > 
              )} />
            <Route path="/about" component={About}/>
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
