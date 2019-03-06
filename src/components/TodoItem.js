import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component{
    getStyle=()=>{
        if(this.props.todo.completed){
            return{
                background: '#f4f4f4',
                padding: '5px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ? 'line-through':'none'
            }
        }
    }

    // markComplete=(e)=>{
    //     console.log(this.props)
    // }

    render(){
        const{id, title} = this.props.todo;
        return(
            <div style ={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}{title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>delete</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired

}

// const itemStyle = {
//     backgroundColor:'#f4f4f4'
// }

const btnStyle={
    background: '#8f94fb',
    color:'#fff',
    border:'none',
    padding: '5px 9px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem;