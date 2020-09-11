import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlaylistScreen from './screens/PlaylistScreen';
import TestScreen from './screens/TestScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import {UserContext} from './context/UserContext';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <NavigationContainer value={[userInfo, setUserInfo]}>
        <Stack.Navigator>
          <Stack.Screen name="Test" component={TestScreen} />
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="Playlist" component={PlaylistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
