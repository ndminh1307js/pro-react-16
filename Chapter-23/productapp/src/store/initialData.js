import { PRODUCTS, SUPPLIERS } from './dataTypes';

export const initialData = {
  modelData: {
    [PRODUCTS]: [],
    [SUPPLIERS]: []
  },
  stateData: {
    editting: false,
    selectedId: -1,
    selectedType: PRODUCTS
  }
}