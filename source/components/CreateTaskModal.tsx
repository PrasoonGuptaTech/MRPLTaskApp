import React from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function CreateTaskModal(props: any) {
  const { isCreateTaskVisible, onCreateTaskCloseHandler } = props;
  return (
    <Modal
      visible={isCreateTaskVisible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.modalContainer}>
        <Pressable
          style={styles.overlayInvisibleLayout}
          onPress={onCreateTaskCloseHandler}
        />
        <View style={styles.modalLayoutView}>
          <ScrollView nestedScrollEnabled={true}>
            <Text>Modal Content View</Text>
          </ScrollView>
        </View>
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
  modalLayoutView: {
    width: Dimensions.get('window').width,
    height: '60%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(248, 250, 252, 0.3)',
    backgroundColor: 'rgba(100, 116, 139, 0.3)',
    zIndex: 2,
    padding: 8,
  },
});

export default CreateTaskModal;
