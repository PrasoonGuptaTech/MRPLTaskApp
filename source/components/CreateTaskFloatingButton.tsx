import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

function CreateTaskFloatingButton(props: any) {
  const { onFloatingButtonPressHandler } = props;
  return (
    <Pressable
      style={styles.overlayLayout}
      onPress={onFloatingButtonPressHandler}
    >
      <Text style={styles.plusText}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});

export default CreateTaskFloatingButton;
