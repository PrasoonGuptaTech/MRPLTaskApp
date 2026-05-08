import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ViewListTask() {
  const [isCreateTaskVisible, setIsCreateTaskVisible] =
    useState<boolean>(false);
  const onFloatingButtonPressHandler = () => setIsCreateTaskVisible(true);
  const onCreateTaskCloseHandler = () => setIsCreateTaskVisible(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Pressable
          style={styles.overlayLayout}
          onPress={onFloatingButtonPressHandler}
        >
          <Text style={styles.plusText}>+</Text>
        </Pressable>
        <View style={styles.activeTaskView}>
          <Image
            source={require('../assets/icons/WarningIcon.png')}
            style={styles.warningIconStyle}
          />
          <Text style={styles.activeTaskText}>No Active Tasks</Text>
        </View>
      </SafeAreaView>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  overlayLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 30,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#06B6D4',
    borderRadius: 25,
    zIndex: 1,
    backgroundColor: '#06B6D4',
  },
  plusText: {
    fontSize: 24,
    fontWeight: '900',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#0F172A',
  },
  activeTaskView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  activeTaskText: {
    fontSize: 24,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#F59E0B',
  },
  warningIconStyle: {
    width: 40,
    height: 40,
  },
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

export default ViewListTask;
