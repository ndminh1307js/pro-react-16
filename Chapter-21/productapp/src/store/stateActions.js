import { PRODUCTS, SUPPLIERS } from './dataTypes';

export const STATE_START_EDITTING = 'state_start_editting';
export const STATE_END_EDITTING = 'state_end_editting';
export const STATE_START_CREATING = 'state_start_creating';

export const startEdittingProduct = (product) => ({
  type: STATE_START_EDITTING,
  dataType: PRODUCTS,
  payload: product
});

export const startEdittingSupplier = (supplier) => ({
  type: STATE_START_EDITTING,
  dataType: SUPPLIERS,
  payload: supplier
});

export const endEditting = () => ({
  type: STATE_END_EDITTING,
});

export const startCreatingProduct = (product) => ({
  type: STATE_START_CREATING,
  dataType: PRODUCTS
});

export const startCreatingSupplier = (supplier) => ({
  type: STATE_START_CREATING,
  dataType: SUPPLIERS
});