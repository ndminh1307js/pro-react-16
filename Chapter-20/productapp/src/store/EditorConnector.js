import { connect } from 'react-redux';
import { endEditting } from './stateActions';
import { PRODUCTS, SUPPLIERS } from './dataTypes';
import { saveAndEndEditting } from './multiActionCreators';

export const EditorConnector = (dataType, presentationComponent) => {
  const mapStateToProps = (storeData) => ({
    editting: storeData.stateData.editting
      && storeData.stateData.selectedType === dataType,
    product: (storeData.modelData[PRODUCTS]
      .find(p => p.id === storeData.stateData.selectedId)) || {},
    supplier: (storeData.modelData[SUPPLIERS]
      .find(s => s.id === storeData.stateData.selectedId)) || {}
  })

  const mapDispatchToProps = {
    cancelCallback: endEditting,
    saveCallback: (data) => saveAndEndEditting(data, dataType)
  };

  return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}