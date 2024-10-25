import { createRpcClient } from '@nailyjs/rpc/axios'

export function useRequest() {
  return createRpcClient()
}
