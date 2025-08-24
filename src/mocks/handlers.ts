import { http, HttpResponse } from 'msw'
import { productsListMock } from '../app/[locale]/api/products/mocks/products-list'

export const handlers = [
  // Intercepta requisições para /[locale]/api/products
  http.get('*/api/products', () => {
    return HttpResponse.json(productsListMock)
  }),
]
