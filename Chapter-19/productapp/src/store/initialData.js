import { PRODUCTS, SUPPLIERS } from './dataTypes';

export const initialData = {
  modelData: {
    [PRODUCTS]: [
      { id: 1, name: 'Until Dawn', category: 'PS4 Games', price: 60 },
      { id: 2, name: 'Counter-Strike: Global Offensive', category: 'Steam Games', price: 12 },
      { id: 3, name: 'Horizon Forbidden West', category: 'PS5 Games', price: 65 },
      { id: 4, name: 'Final Fantasy VII Remake Edition', category: 'PS4 Games', price: 80 },
    ],
    [SUPPLIERS]: [
      { id: 1, name: 'Valve', city: 'Washington', products: [2] },
      { id: 2, name: 'Sony', city: 'Tokyo', products: [1, 3] }
    ]
  },
  stateData: {
    editting: false,
    selectedId: -1,
    selectedType: PRODUCTS
  }
}