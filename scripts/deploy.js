import path from 'node:path'
import { env } from 'node:process'
import { preview } from 'vite'

async function startServer() {
  const server = await preview({
    preview: {
      port: env.PORT || 3000, // 使用 Vercel 提供的端口
    },
    configFile: path.resolve('vite.config.ts'),
  })
  server.printUrls()
}

startServer()
