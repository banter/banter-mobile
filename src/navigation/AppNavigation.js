import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import {Icon} from 'native-base';
import OnboardingScreen from '../screens/OnboardingScreen';
import ExperienceCreationScreen from '../screens/ExperienceCreationScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ForYouScreen from '../screens/ForYouScreen';
import ExploreScreen from '../screens/ExploreScreen';
import PlaylistScreen from '../screens/PlaylistScreen';

const AppNavigator = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'App';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
        headerShown: false,
      }}
        component={HomeScreen}
        name="Home"/>
        <Stack.Screen name="Playlist" component={PlaylistScreen}/>
    </Stack.Navigator>
  );
}

export default function MainApp({navigation, route}) {
  return (
    <AppNavigator.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <AppNavigator.Screen
        name="Home"
        component={HomeStack}
        options={{
        headerShown: false,
        tabBarIcon: () => (<Icon type="Entypo" name="home"/>),
      }}/>
      <AppNavigator.Screen
        name="For You"
        component={ForYouScreen}
        options={{
        tabBarLabel: 'For You',
        tabBarIcon: () => (<Icon type="Entypo" name="fingerprint"/>),
      }}/>
      <AppNavigator.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
        tabBarLabel: 'Explore',
        tabBarIcon: () => (<Icon name="ios-search"/>),
      }}/>
    </AppNavigator.Navigator>
  );
}
