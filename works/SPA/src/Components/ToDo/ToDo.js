import React, { Component } from 'react';
import './css/ToDo.css'
import ToDoInput from './ToDoInput.js'
import ToDoItem from './ToDoItem.js'

class ToDo extends Component{
    constructor(props){
        super(props);

        this.state = {
            todos: [
                {id: 0, text: "Do portfolio site"},
                {id: 1, text: "Make dinner tonight"},
                {id: 2, text: "Learn to make a React app!"},
            ],
            nextId: 3
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText){
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        })
    }

    removeTodo(id){
        console.log("remove: ", id)
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id)
        })
    }

    render(){
        return(
            <div className="App-header bg-todo">
                <div className="ToDoWrap">
                    <div className="ToDoName">
                        <h2>ToDo List</h2>
                    </div>
                    <div className="ToDoMainBlock">
                        <ToDoInput todoText="" addTodo={this.addTodo}/>
                    </div>
                    <div className="ToDoList">
                        <ul>
                            {
                                this.state.todos.map((todo) => {
                                    return(
                                        <ToDoItem
                                            todo={todo}
                                            key={todo.id}
                                            id={todo.id}
                                            removeTodo={this.removeTodo}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToDo
