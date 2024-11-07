import { WelcomeServer } from '#/welcome-protocol'
import { RpcController } from '@nailyjs/rpc'

@RpcController(WelcomeServer)
export class WelcomeServerImpl implements WelcomeServer {
  toggle: boolean = false

  sayHello() {
    this.toggle = !this.toggle
    return this.toggle
      ? 'Hello, world! Click me to refetch~?'
      : 'Hello, vitesse! Click me to refetch.~'
  }

  sayGoodbye() {
    return 'Goodbye, world!'
  }
}
