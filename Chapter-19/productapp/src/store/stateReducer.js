import { STATE_END_EDITTING, STATE_START_CREATING, STATE_START_EDITTING } from './stateActions';
import { initialData } from './initialData';

export default function (storeData, action) {
  switch (action.type) {
    case STATE_START_EDITTING:
    case STATE_START_CREATING:
      return {
        ...storeData,
        editting: true,
        selectedId: action.type === STATE_START_EDITTING
          ? action.payload.id : -1,
        selectedType: action.dataType
      }
    case STATE_END_EDITTING:
      return {
        ...storeData,
        editting: false
      }
    default:
      return storeData || initialData.stateData
  }
}