import type { Todo } from '@/models/todo.model'

export const WelcomeServer = 'WelcomeServer'

export interface WelcomeServer {
  sayHello(): string
  getTodoList(): Promise<Todo[]>
  addNewTodo(content: string): Promise<Todo>
  deleteTodo(id: number): Promise<void>
}
