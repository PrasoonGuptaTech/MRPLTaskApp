import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function NoActiveTask() {
  return (
    <View style={styles.activeTaskView}>
      <Image
        source={require('../assets/icons/WarningIcon.png')}
        style={styles.warningIconStyle}
      />
      <Text style={styles.activeTaskText}>No Active Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default NoActiveTask;
