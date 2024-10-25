import { RpcController } from '@nailyjs/rpc'
import { WelcomeServer } from '~common/welcome-protocol'

@RpcController(WelcomeServer)
export class WelcomeServerImpl implements WelcomeServer {
  toggle: boolean = false

  sayHello() {
    this.toggle = !this.toggle
    return this.toggle
      ? 'Hello, world! Click me to refetch.'
      : 'Hello, vitesse! Click me to refetch.'
  }
}
