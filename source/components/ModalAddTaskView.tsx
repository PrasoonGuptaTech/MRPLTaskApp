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

function ModalAddTaskView(props: any) {
  const { titleInput, setTitleInput, descriptionInput, setDescriptionInput } =
    props;
  return (
    <View style={styles.modalLayoutView}>
      <Text style={styles.headingTaskMainTitle}>Add Task</Text>
      <View style={styles.dividerLine} />
      <ScrollView nestedScrollEnabled={true}>
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
        />
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
        />
      </ScrollView>
      <Pressable style={styles.addTaskCTA}>
        <Text style={styles.addTaskCTAText}>Add Task</Text>
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
    fontSize: 22,
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
    fontSize: 20,
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
    marginBottom: 36,
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
});

export default ModalAddTaskView;
