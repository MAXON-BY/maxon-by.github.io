import React, { Component } from 'react';

class ToDoInput extends Component{
    constructor(props){
        super(props);

        this.state = {value: this.props.todoText};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e){
        console.log("change");
        this.setState({value: e.target.value})
    }

    addTodo(todo){
        console.log("ToDo: ", todo);
        if(todo.length > 0){
            this.props.addTodo(todo);
            this.setState({value: ""})
        }
    }

    render(){
        return(
            <div className="inputWrap">
                <input type="text" value={this.state.value} placeholder="New message" onChange={this.handleChange}/>
                <button
                    className="btn btn-primary"
                    onClick={() => this.addTodo(this.state.value)}
                >
                    Add ToDo
                </button>
            </div>
        )
    }
}
export default ToDoInput
