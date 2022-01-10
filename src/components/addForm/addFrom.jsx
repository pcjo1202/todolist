import React, { useRef, useState } from 'react'
import {
  AddBox,
  AddInput,
  AddInputContainer,
  ToggleBtn,
  ToggleWrapper
} from './addFrom.content'

const AddFrom = ({ onAddTodo }) => {
  const inputRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    inputRef.current.focus()
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      id: Date.now(),
      text: inputRef.current.value || ''
    }
    onAddTodo(data)
    inputRef.current.value = ''
  }

  return (
    <AddInputContainer onSubmit={handleSubmit}>
      <AddBox isOpen={isOpen}>
        <ToggleWrapper isOpen={isOpen} onClick={handleOpen}>
          <ToggleBtn isOpen={isOpen} />
        </ToggleWrapper>
        <AddInput ref={inputRef} isOpen={isOpen} type='text' placeholder='입력' />
      </AddBox>
    </AddInputContainer>
  )
}

export default AddFrom
