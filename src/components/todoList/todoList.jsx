import React from 'react'
import styled from 'styled-components'
import TodoItem from '../todoItem/todoItem'

const TodoListUl = styled.ul`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
`

const TodoList = ({ todo, onDeleteTodo }) => {
  return (
    <TodoListUl>
      {Object.keys(todo).map(id => {
        return (
          <TodoItem key={id} todo={todo[id]} onDeleteTodo={onDeleteTodo} />
        )
      })}
    </TodoListUl>
  )
}

export default TodoList
