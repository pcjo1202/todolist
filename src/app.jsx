import { useState } from 'react'
import AddFrom from './components/addForm/addFrom'
import Header from './components/header/header'
import TodoContainer from './components/todoContainer/todoContainer'
import TodoList from './components/todoList/todoList'

const App = () => {
  const [todo, setTodo] = useState({})

  const onAddTodo = data => {
    setTodo(prev => {
      const updated = { ...prev }
      updated[data.id] = data
      return updated
    })
  }

  const onDeleteTodo = data => {
    setTodo(prev => {
      const updated = { ...prev }
      delete updated[data.id]
      return updated
    })
  }
  return (
    <TodoContainer>
      <Header />
      <TodoList todo={todo} onDeleteTodo={onDeleteTodo} />
      <AddFrom onAddTodo={onAddTodo} />
    </TodoContainer>
  )
}

export default App
