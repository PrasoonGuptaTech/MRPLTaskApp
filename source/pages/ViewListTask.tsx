import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ViewListTask() {
  const onFloatingButtonPressHandler = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainerStyle}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    zIndex: 999,
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
});

export default ViewListTask;
