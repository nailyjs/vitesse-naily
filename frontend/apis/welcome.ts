import { useRequest } from '../utils/request'
import { WelcomeServer } from '~common/welcome-protocol'

export function useWelcomeServer() {
  const client = useRequest()

  function request() {
    return client.request<WelcomeServer>(WelcomeServer)
  }

  return {
    request,
  }
}
