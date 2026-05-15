import React from 'react';
import {
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { createTask, updateTask } from '../Slicing/taskSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux/reduxHooks';

function ModalAddTaskView(props: any) {
  const {
    titleInput,
    setTitleInput,
    descriptionInput,
    setDescriptionInput,
    onCreateTaskCloseHandler,
    editTask,
  } = props;
  const dispatch = useAppDispatch();
  const isEdtTaskModalOpen = useAppSelector(
    state => state?.task?.isTaskEditable,
  );
  const onCancelCTAPressHandler = () => {
    setTitleInput('');
    setDescriptionInput('');
    onCreateTaskCloseHandler();
  };
  const onAddTaskCTAHandler = () => {
    if (titleInput !== '' && descriptionInput !== '') {
      if (isEdtTaskModalOpen) {
        const addTaskArray = {
          id: editTask?.id,
          addTaskTitle: titleInput,
          addTaskDescription: descriptionInput,
        };
        dispatch(updateTask(addTaskArray));
      } else {
        const addTaskArray = {
          id: Math.random()?.toString(36)?.slice(2, 9),
          addTaskTitle: titleInput,
          addTaskDescription: descriptionInput,
        };
        dispatch(createTask(addTaskArray));
      }
      onCreateTaskCloseHandler();
      setTitleInput('');
      setDescriptionInput('');
    }
  };
  return (
    <View style={styles.modalLayoutView}>
      <Text style={styles.headingTaskMainTitle}>Add Task</Text>
      <View style={styles.dividerLine} />
      <ScrollView nestedScrollEnabled={true}>
        <View>
          <Text style={styles.headingTitle}>Title</Text>
          <TextInput
            value={titleInput}
            onChangeText={setTitleInput}
            editable={true}
            inputMode="text"
            keyboardAppearance="light"
            numberOfLines={1}
            placeholder="Enter Title"
            placeholderTextColor="#64748B"
            textAlign="left"
            textAlignVertical="bottom"
            style={styles.titleInput}
            cursorColor="#0F172A"
            selectionColor="#0F172A"
            autoCorrect={false}
          />
        </View>
        <View>
          <Text style={styles.headingTitle}>Description</Text>
          <TextInput
            value={descriptionInput}
            onChangeText={setDescriptionInput}
            editable={true}
            inputMode="text"
            keyboardAppearance="light"
            multiline={true}
            numberOfLines={5}
            placeholder="Enter Description"
            placeholderTextColor="#64748B"
            textAlign="left"
            textAlignVertical="bottom"
            style={[styles.titleInput, styles.descriptionInput]}
            cursorColor="#0F172A"
            selectionColor="#0F172A"
            autoCorrect={false}
          />
        </View>
      </ScrollView>
      <Pressable style={styles.addTaskCTA} onPress={onAddTaskCTAHandler}>
        <Text style={styles.addTaskCTAText}>{`${isEdtTaskModalOpen ? 'Update' : 'Add'} Task`}</Text>
      </Pressable>
      <Pressable
        style={[styles.addTaskCTA, styles.cancelCTA]}
        onPress={onCancelCTAPressHandler}
      >
        <Text style={styles.addTaskCTAText}>Cancel</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  modalLayoutView: {
    width: Dimensions.get('window').width,
    height: '60%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(248, 250, 252, 1)',
    backgroundColor: 'rgba(100, 116, 139, 1)',
    zIndex: 2,
    padding: 8,
  },
  headingTaskMainTitle: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#0F172A',
    margin: 8,
  },
  dividerLine: {
    width: Dimensions.get('window').width - 10,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    opacity: 0.5,
  },
  headingTitle: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#0F172A',
    margin: 8,
  },
  titleInput: {
    width: Dimensions.get('window').width - 40,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    margin: 8,
    paddingHorizontal: 8,
    paddingBottom: 8,
    ...(Platform.OS === 'ios'
      ? {
          paddingTop: 24,
        }
      : {
          textAlignVertical: 'bottom',
        }),
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#0F172A',
  },
  descriptionInput: {
    height: 96,
  },
  addTaskCTA: {
    width: Dimensions.get('window').width - 40,
    height: 48,
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
    backgroundColor: '#06B6D4',
    borderColor: '#06B6D4',
  },
  addTaskCTAText: {
    fontSize: 16,
    fontWeight: '800',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#FFFFFF',
  },
  cancelCTA: {
    marginBottom: 36,
    backgroundColor: '#ee5050',
    borderColor: '#ee5050',
  },
});

export default ModalAddTaskView;
