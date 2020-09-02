import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({navigation, route}) {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Listen',
        }}
      />
    </BottomTab.Navigator>
  );
}
