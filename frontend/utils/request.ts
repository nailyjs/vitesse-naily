import { createRpcClient } from '@nailyjs/rpc/axios'

export function useRequest() {
  return createRpcClient(import.meta.env.PROD ? 'http://localhost:1000/rpc' : '/rpc')
}
