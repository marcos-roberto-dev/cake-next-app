import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Setup para browser (Client-Side)
export const worker = setupWorker(...handlers)
