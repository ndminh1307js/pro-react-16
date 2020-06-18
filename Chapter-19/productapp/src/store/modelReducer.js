import { STORE, UPDATE, DELETE } from './modelActionTypes';
import { initialData } from './initialData';

export default function (storeData, action) {
  switch (action.type) {
    case STORE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].concat(action.payload)
      }
    case UPDATE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].map(item =>
          item.id === action.payload.id ? action.payload : item)
      }
    case DELETE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType]
          .filter(item => item.id !== action.payload)
      }
    default:
      return storeData || initialData;
  }
}