import {View, TouchableOpacity, Text, Modal} from 'react-native';
import React from 'react';

const ModelView = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.ShowModal}
      onRequestClose={props.onCloseModal}>
      <TouchableOpacity
        activeOpacity={1}
        style={{backgroundColor: 'rgba(0000, 0, 0, 0.3)', flex: 1}}>
        {props.children}
      </TouchableOpacity>
    </Modal>
  );
};

export default ModelView;
