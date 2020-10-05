import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainApp from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {fetchTrendingTopics, fetchCollections} from './store/actions/topics';
import AuthApp from './src/navigation/AuthNavigation';
import { FooterPlayer } from './src/components/organisms';

import store from './store';

const Stack = createStackNavigator();

store.dispatch(fetchTrendingTopics());
store.dispatch(fetchCollections());

const App : () => React$Node = () => {

  const linking = {
    prefixes: ['https://banteraudio.com', 'https://www.banteraudio.com', 'https://banteraudio.com', 'banteraudio:'],
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
        <Stack.Screen
            options={{
            headerShown: false,
          }}
            name="App"
            component={MainApp}/>
        <Stack.Screen
            options={{
            headerShown: false,
          }}
            name="Auth"
            component={AuthApp}/>
        </Stack.Navigator>
        <FooterPlayer />
      </NavigationContainer>
    </Provider>
  );
        };

export default App;
