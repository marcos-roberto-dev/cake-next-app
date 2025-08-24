import { server } from './mocks/node'

// Inicializa o MSW server para interceptar requests durante SSR
if (typeof window === 'undefined') {
  server.listen({
    onUnhandledRequest: 'bypass',
  })
}

export { server }
