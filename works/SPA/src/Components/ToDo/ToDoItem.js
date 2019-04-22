import React, {Component} from 'react';

class ToDoItem extends Component{
    removeTodo(id){
        this.props.removeTodo(id)
    }

    render(){
        return(
            <li className="todoLi">
                <div className="todoText">
                    {this.props.todo.text}
                </div>
                <button
                    className="removeToDo"
                    onClick={(e) => this.removeTodo(this.props.id)}
                >
                    X
                </button>
            </li>
        )
    }
}
export default ToDoItem
