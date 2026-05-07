import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewListTask from '../pages/ViewListTask';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="viewListTask"
        component={ViewListTask}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
