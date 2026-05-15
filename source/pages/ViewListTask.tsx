import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateTaskFloatingButton from '../components/CreateTaskFloatingButton';
import NoActiveTask from '../components/NoActiveTask';
import CreateTaskModal from '../components/CreateTaskModal';
import { useAppDispatch, useAppSelector } from '../hooks/redux/reduxHooks';
import ActiveTask from '../components/ActiveTask';
import { cancelEditTask } from '../Slicing/taskSlice';

function ViewListTask() {
  const dispatch = useAppDispatch();
  const taskDetails = useAppSelector(state => state?.task?.taskArray);
  const isEdtTaskModalOpen = useAppSelector(state => state.task.isTaskEditable);
  const editTask = useAppSelector(state => state?.task?.editTaskObject);
  const [isCreateTaskVisible, setIsCreateTaskVisible] =
    useState<boolean>(false);
  const onFloatingButtonPressHandler = () => setIsCreateTaskVisible(true);
  const onCreateTaskCloseHandler = () => {
    setIsCreateTaskVisible(false);
    if (isEdtTaskModalOpen) {
      dispatch(cancelEditTask());
    } else {
      return;
    }
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <CreateTaskFloatingButton
          onFloatingButtonPressHandler={onFloatingButtonPressHandler}
        />
        {Array?.isArray(taskDetails) && taskDetails?.length === 0 && (
          <NoActiveTask />
        )}
        {Array?.isArray(taskDetails) && taskDetails?.length > 0 && (
          <ActiveTask taskDetails={taskDetails} />
        )}
      </SafeAreaView>
      <CreateTaskModal
        isCreateTaskVisible={isCreateTaskVisible || isEdtTaskModalOpen}
        onCreateTaskCloseHandler={onCreateTaskCloseHandler}
        editTask={editTask}
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
