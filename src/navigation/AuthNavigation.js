import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import {Icon, Text} from 'native-base';
import OnboardingScreen from '../screens/OnboardingScreen';
import ExperienceCreationScreen from '../screens/ExperienceCreationScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function AuthApp({navigation, route}) {
  return (
    <Stack.Navigator>
<Stack.Screen
        options={{
        headerShown: false,
      }}
        name="Landing"
        component={LandingScreen}/>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={({navigation}) => ({
        headerTitle: 'Pick your favorite teams!',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ExperienceCreation')}
            title="Info"
            style={{
            marginRight: 10,
          }}>
            <Text>Done</Text>
          </TouchableOpacity>
        ),
      })}/>
      <Stack.Screen
        name="ExperienceCreation"
        options={{
        headerShown: false,
      }}
        component={ExperienceCreationScreen}/>
    </Stack.Navigator>

  );
}
