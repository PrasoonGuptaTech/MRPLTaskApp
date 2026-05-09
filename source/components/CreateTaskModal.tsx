import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import ModalAddTaskView from './ModalAddTaskView';

function CreateTaskModal(props: any) {
  const { isCreateTaskVisible, onCreateTaskCloseHandler } = props;
  const [titleInput, setTitleInput] = useState<string>('');
  const [descriptionInput, setDescriptionInput] = useState<string>('');
  return (
    <Modal
      visible={isCreateTaskVisible}
      transparent={true}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <View style={styles.modalContainer}>
        <Pressable
          style={styles.overlayInvisibleLayout}
          onPress={onCreateTaskCloseHandler}
        />
        <ModalAddTaskView
          titleInput={titleInput}
          setTitleInput={setTitleInput}
          descriptionInput={descriptionInput}
          setDescriptionInput={setDescriptionInput}
          onCreateTaskCloseHandler={onCreateTaskCloseHandler}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlayInvisibleLayout: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default CreateTaskModal;
