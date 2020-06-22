import { PRODUCTS } from './dataTypes';
import { saveProduct, saveSupplier } from './modelActionCreators';
import { endEditting } from './stateActions';

export const saveAndEndEditting = (data, dataType) => [
  dataType === PRODUCTS ? saveProduct(data) : saveSupplier(data),
  endEditting()
]