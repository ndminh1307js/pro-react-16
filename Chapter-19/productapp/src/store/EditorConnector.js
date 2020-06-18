import { connect } from 'react-redux';
import { endEditting } from './stateActions';
import { saveProduct, saveSupplier } from './modelActionCreators';
import { PRODUCTS, SUPPLIERS } from './dataTypes';

export const EditorConnector = (dataType, presentationComponent) => {
  const mapStateToProps = (storeData) => ({
    editting: storeData.stateData.editting
      && storeData.stateData.selectedType === dataType,
    product: (storeData.modelData[PRODUCTS]
      .find(p => p.id === storeData.stateData.selectedId)) || {},
    supplier: (storeData.modelData[SUPPLIERS]
      .find(s => s.id === storeData.stateData.selectedId)) || {}
  })

  const mapDispatchToProps = dispatch => ({
    cancelCallback: () => dispatch(endEditting()),
    saveCallback: (data) => {
      dispatch((dataType === PRODUCTS ? saveProduct : saveSupplier)(data));
      dispatch(endEditting());
    }
  })

  return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}