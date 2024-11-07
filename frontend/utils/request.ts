import { createAxiosClient } from '@nailyjs/rpc/axios'
import { isClient } from '@vueuse/core'

export function useRequest() {
  return createAxiosClient({
    urlOrAxiosInstance: import.meta.env.PROD ? 'http://localhost:1000/rpc' : '/rpc',
    ssr: !isClient,
  })
}
