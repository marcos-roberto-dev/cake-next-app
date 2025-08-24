import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Setup para Node.js (Server-Side Rendering)
export const server = setupServer(...handlers)
