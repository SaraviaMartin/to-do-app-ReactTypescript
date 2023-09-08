export interface Todo = {
    id: string
    title: string
    completed: boolean
}

export type TodoId = Pick<Todo, 'id' | 'completed'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]

