import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }


  render() {
    const { id, title } = this.props.todo //Note 1 这里加了解构赋值
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          {/*Note 1 这里可以替换为 以前{this.props.todo.title} */}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }


