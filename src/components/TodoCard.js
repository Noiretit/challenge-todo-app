import React, { Component } from 'react';
import Moment from 'moment';
import todoService from '../service/todoService';

//Card para cada uno de los todos, renderiza la información y un boton de delete y uno de done por cada uno de ellos 
class TodoCard extends Component {

    handleDeleteTodo = event =>{
        
        event.preventDefault()
        const{todo} = this.props
      //  console.log(todo)
        todoService.deleteTodo(todo._id)
    }

    handleDoneTodo = event => {
        event.preventDefault()

        const{todo} = this.props

        todoService.updateDone(todo._id)
    }

    render() {
        return (
            <div className='card-container'>
                <h2> {this.props.todo.title} </h2>
                <p>{Moment(this.props.todo.createdAt).format('L')}</p>
                <p className='content'> {this.props.todo.body} </p>
                <div className='btn-container'>
                <input type="submit" value='delete' onClick={this.handleDeleteTodo}/>
                {this.props.todo.done === 'false' ? 
                <input type="submit" value='done' onClick={this.handleDoneTodo}/> : null
                }
                </div>
            </div>
        )
    }
}




export default TodoCard
