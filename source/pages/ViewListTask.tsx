import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateTaskFloatingButton from '../components/CreateTaskFloatingButton';
import NoActiveTask from '../components/NoActiveTask';
import CreateTaskModal from '../components/CreateTaskModal';

function ViewListTask() {
  const [isCreateTaskVisible, setIsCreateTaskVisible] =
    useState<boolean>(false);
  const onFloatingButtonPressHandler = () => setIsCreateTaskVisible(true);
  const onCreateTaskCloseHandler = () => setIsCreateTaskVisible(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <CreateTaskFloatingButton
          onFloatingButtonPressHandler={onFloatingButtonPressHandler}
        />
        <NoActiveTask />
      </SafeAreaView>
      <CreateTaskModal
        isCreateTaskVisible={isCreateTaskVisible}
        onCreateTaskCloseHandler={onCreateTaskCloseHandler}
      />
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
});

export default ViewListTask;
