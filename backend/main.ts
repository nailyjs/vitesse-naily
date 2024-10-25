// backend/main.ts
/// <reference types="vite/client" />

import { NodeHttpAdapter } from '@nailyjs/backend/node-adapter'
import { RpcBootstrap } from '@nailyjs/rpc'
import './welcome-server'

// You must export `app` for the plugin to work.
// you also can configure your export key in the plugin options.
export const app = new RpcBootstrap(new NodeHttpAdapter())

// It will be called when environment is production mode
if (import.meta.env.PROD)
  app.run(1000)
