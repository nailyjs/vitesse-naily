import { WelcomeServer } from '#/welcome.protocol'
import { Todo } from '@/models/todo.model'
import { RpcController } from '@nailyjs/rpc'
import { DataSource } from 'typeorm'

@RpcController(WelcomeServer)
export class WelcomeController implements WelcomeServer {
  constructor(private readonly dataSource: DataSource) {}

  toggle: boolean = false

  sayHello() {
    this.toggle = !this.toggle
    return this.toggle
      ? 'Hello, world! Click me to refetch~?'
      : 'Hello, vitesse! Click me to refetch.~'
  }

  async getTodoList(): Promise<Todo[]> {
    const todoRepository = this.dataSource.getRepository(Todo)
    return await todoRepository.find()
  }

  async addNewTodo(content: string): Promise<Todo> {
    const todoRepository = this.dataSource.getRepository(Todo)
    const newTodo = new Todo()
    newTodo.content = content
    return await todoRepository.save(newTodo)
  }

  async deleteTodo(id: number): Promise<void> {
    const todoRepository = this.dataSource.getRepository(Todo)
    const todo = await todoRepository.findOneBy({ id })
    // eslint-disable-next-line antfu/if-newline
    if (todo) await todoRepository.remove(todo)
  }
}
