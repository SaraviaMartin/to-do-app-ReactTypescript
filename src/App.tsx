import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, type TodoId, type Todo as TodoType } from "./types"
import { FILTERS_BUTTONS, TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"

const mockTodos = [
  {
    id: '1',
    title: 'Aprender React',
    completed: false,
  },
  {
    id: '2',
    title: 'Ver tutorial de Postman',
    completed: false,
  },
  {
    id: '3',
    title: 'Aprender Next.js',
    completed: false,
  },
]

const  App = (): JSX.Element  => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}:TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed}: Pick<TodoType, 'id' |'completed'>
    ): void => {
      const newTodos = todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed
          }
        }
        return todo
      })

      setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">

      <Todos 
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo={handleRemove}
      todos={filteredTodos}
      />
      <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      onClearCompleted={() => {}}
      handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
