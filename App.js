import './wdyr';
import * as React from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainApp from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {Root, Toast} from 'native-base';
import {fetchTrendingTopics, fetchCollections} from './store/actions/topics';
import AuthApp from './src/navigation/AuthNavigation';
import store from './store';
import { fetchForYou, getCurrentUser } from './store/actions/userData';
import { navigationRef, navigate } from './src/navigation/RootNavigation';

const Stack = createStackNavigator();

async function initialize() {
  await store.dispatch(getCurrentUser());
  const user = store.getState().userDataState.currentUser;
  // TODO if new user, push to onboarding. Otherwise to foryou.
  if (user.id) {
    navigate('App', {screen: 'For You'});
  } else {
    navigate('Auth');
  }
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

    const { token, error } = queryParams;
    if (error) {
      Toast.show({
        text: decodeURI(error),
        duration: 5000,
      });
    }
    if (token) {
      try {
        await AsyncStorage.setItem('banter-auth-token', token);
        initialize();
      } catch (e) {
        Toast.show({
          text: decodeURI(e.message),
          duration: 5000,
        });
        console.log('failed to set token', e.message);
        navigate('Auth');
      }
    }
  });

  const linking = {
    prefixes: ['https://banteraudio.com', 'https://www.banteraudio.com', 'https://banteraudio.com', 'banteraudio:'],
  };
  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer ref={navigationRef} linking={linking}>
          <Stack.Navigator>
          <Stack.Screen
                options={{ headerShown: false }}
                name="Auth"
                component={AuthApp}/>
            <Stack.Screen
                options={{ headerShown: false }}
                name="App"
                component={MainApp}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </Provider>
  );
};


export default App;
