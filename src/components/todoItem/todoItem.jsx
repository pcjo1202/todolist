import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineDelete } from 'react-icons/ai'
import { IconButton } from '../../styles/common'

const TodoItemBlock = styled.li`
  position: relative;
  background: ${({ isDone }) => (isDone ? '#a9a7a7' : '#e4e4e4')};
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  transition: background 0.1s ease-in;

  display: flex;
  align-items: center;
`

const CheckBtn = styled(IconButton)`
  margin-right: 1rem;
  border: 4px solid grey;
  border-radius: 50%;
  background-color: ${({ isDone }) => (isDone ? '#ff6666' : null)};
`

const DeletBtn = styled(IconButton)`
  position: absolute;
  right: 5%;
`

const TodoItem = ({ todo, onDeleteTodo }) => {
  const [isDone, setIsDone] = useState(false)
  console.log(todo)

  return (
    <TodoItemBlock isDone={isDone}>
      <CheckBtn isDone={isDone} onClick={() => setIsDone(!isDone)} />
      {todo && todo.text}
      <DeletBtn>
        <AiOutlineDelete onClick={() => onDeleteTodo(todo)} />
      </DeletBtn>
    </TodoItemBlock>
  )
}

export default TodoItem
