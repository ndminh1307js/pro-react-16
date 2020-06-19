import { createStore, combineReducers, applyMiddleware } from 'redux';
import modelReducer from './modelReducer';
import stateReducer from './stateReducer';
import { customReducerEnhancer } from './CustomReducerEnhancer';
import { multiActions } from './multiActionMiddleware';

const enhancedReducer = customReducerEnhancer(
  combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
  })
);

export default createStore(enhancedReducer, applyMiddleware(multiActions));

export { saveProduct, saveSupplier, deleteProduct, deleteSupplier }
  from './modelActionCreators';