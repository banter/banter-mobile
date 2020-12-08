import './wdyr';
import * as React from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainApp from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {fetchTrendingTopics, fetchCollections} from './store/actions/topics';
import AuthApp from './src/navigation/AuthNavigation';
import store from './store';
import { fetchForYou, getCurrentUser } from './store/actions/userData';
import { navigationRef, navigate } from './src/navigation/RootNavigation';

const Stack = createStackNavigator();

async function initialize() {
  await store.dispatch(getCurrentUser());
  store.dispatch(fetchTrendingTopics());
  store.dispatch(fetchCollections());
  store.dispatch(fetchForYou());
}

initialize();

const App : () => React$Node = () => {
  Linking.addEventListener('url', async ({url}) => {
    const queryParams = {};
    url.split('?').slice(1).join().split('&').forEach(param => {
      const mapping = param.split('=');
      queryParams[mapping[0]] = mapping[1];
    });

    const { token } = queryParams;
    if (token) {
      try {
        await AsyncStorage.setItem('token', token);
        initialize();
      } catch (e) {
        console.log('failed to set token', e.message);
      }
    }
    navigate('For You');
  });

  const linking = {
    prefixes: ['https://banteraudio.com', 'https://www.banteraudio.com', 'https://banteraudio.com', 'banteraudio:'],
  };
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} linking={linking}>
        <Stack.Navigator>
        {/* <Stack.Screen
        options={{
        headerShown: false,
      }}
        component={TestScreen}
        name="For You"/> */}
        <Stack.Screen
            options={{ headerShown: false }}
            name="App"
            component={MainApp}/>
        <Stack.Screen
            options={{ headerShown: false }}
            name="Auth"
            component={AuthApp}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
        };


export default App;
