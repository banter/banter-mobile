import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlaylistScreen from './screens/PlaylistScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import allReducers from './reducers/index.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {fetchTopics} from './actions/topics';
import { composeWithDevTools } from 'redux-devtools-extension';

const Stack = createStackNavigator();

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(fetchTopics());

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="Playlist" component={PlaylistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
