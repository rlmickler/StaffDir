import React from 'react';
import './input.css';

export default class Input extends React.Component {
constructor(props){
    super(props)

    this.state = { value: "test"};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
}
handleChange(e){
    this.setState({value: e.target.value});
}

addTodo(Todo) {
    //make sure the todo text isn't empty
    if (Todo.length > 0) {
        this.props.addTodo(Todo);
        this.setState(
            {value: ''}
        );
    }
   
}

render() {
    return  (
        <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button className="btn btn-primary" onClick={()=> this.addTodo(this.state.value)}>Submit</button>
        </div>
        );
    }
}