import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { isExpandedCheck } from '../Utility/Operations';

function ActiveTask(props: any) {
  const { taskDetails } = props;
  const [taskExpanded, setTaskExpanded] = useState<{ [key: string]: boolean }>(
    {},
  );
  const onTaskExpandedHandler = (id: string) => {
    setTaskExpanded(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const renderArrowIcon = (item: any) => {
    const isExpanded = isExpandedCheck(taskExpanded[item?.id]);
    return (
      <>
        {isExpanded ? (
          <Image
            source={require('../assets/icons/UpArrow.png')}
            style={styles.downArrowIconStyle}
          />
        ) : (
          <Image
            source={require('../assets/icons/DownArrow.png')}
            style={styles.downArrowIconStyle}
          />
        )}
      </>
    );
  };
  const renderTaskDetails = (item: any) => {
    const isExpanded = isExpandedCheck(taskExpanded[item?.id]);
    return (
      <>
        {!isExpanded && (
          <Text style={styles.addTaskDetailsTextStyle}>
            {item?.addTaskTitle}
          </Text>
        )}
        {isExpanded && (
          <View style={[styles.expandedTaskDetailsView]}>
            <Text style={styles.addTaskDetailsTextStyle}>
              {item?.addTaskTitle}
            </Text>
            <View style={styles.dividerLine} />
            <Text style={styles.addTaskDescriptionTextStyle}>
              {item?.addTaskDescription}
            </Text>
            <View style={styles.buttonViewLayout}>
              <Pressable style={styles.editButtonCTAStyle}>
                <Text style={styles.editCTATextStyle}>Edit</Text>
              </Pressable>
              <Pressable style={styles.editButtonCTAStyle}>
                <Text style={styles.editCTATextStyle}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      </>
    );
  };
  const renderItem = ({ item }: { item: any }) => {
    return (
      <Pressable
        style={styles.taskDetailsView}
        onPress={() => onTaskExpandedHandler(item?.id)}
      >
        {renderTaskDetails(item)}
        <View style={styles.arrowIconViewStyle}>{renderArrowIcon(item)}</View>
      </Pressable>
    );
  };
  return (
    <View style={styles.activeTaskView}>
      <Text style={styles.activeTaskTextStyle}>Active Tasks</Text>
      <View style={styles.flatListView}>
        <FlatList
          data={taskDetails}
          keyExtractor={ele => ele?.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeTaskView: {
    margin: 16,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  activeTaskTextStyle: {
    fontSize: 20,
    fontWeight: '900',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#0F172A',
  },
  flatListView: {
    marginTop: 8,
  },
  taskDetailsView: {
    width: Dimensions.get('window').width - 32,
    minHeight: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b3d3fa',
    borderRadius: 8,
    marginVertical: 4,
    flexDirection: 'row',
    paddingHorizontal: 8,
    backgroundColor: '#b3d3fa',
  },
  addTaskDetailsTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#0F172A',
  },
  addTaskDescriptionTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#002D62',
    marginLeft: 2,
  },
  arrowIconViewStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 8,
    padding: 8,
  },
  downArrowIconStyle: {
    width: 12,
    height: 12,
  },
  expandedTaskDetailsView: {
    flexDirection: 'column',
    minHeight: 96,
    marginTop: 13,
  },
  dividerLine: {
    width: Dimensions.get('window').width - 48,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    opacity: 1,
    marginVertical: 8,
  },
  buttonViewLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 8,
  },
  editButtonCTAStyle: {
    width: Dimensions.get('window').width / 3,
    height: 32,
    borderWidth: 1,
    borderColor: '#0056b3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0056b3',
  },
  editCTATextStyle: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#FFFFFF',
  },
});

export default ActiveTask;
