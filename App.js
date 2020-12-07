import './wdyr';
import * as React from 'react';
import { Linking  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainApp from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {fetchTrendingTopics, fetchCollections} from './store/actions/topics';
import AuthApp from './src/navigation/AuthNavigation';
import LoginScreen from './src/screens/LoginScreen';
import TrackPlayer, {
  useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING,
} from 'react-native-track-player';
import store from './store';
import { fetchForYou } from './store/actions/userData';
import { navigationRef, navigate } from './src/navigation/RootNavigation';

const Stack = createStackNavigator();

store.dispatch(fetchTrendingTopics());
store.dispatch(fetchCollections());
// TODO move to a for You Specific API?
store.dispatch(fetchForYou());

// You can now get a ref directly to the DOM button:
const ref = React.createRef();

const App : () => React$Node = () => {
  Linking.addEventListener('url', async ({url}) => {
    const queryParams = {};
    url.split('?').slice(1).join().split('&').forEach(param => {
      const mapping = param.split('=');
      queryParams[mapping[0]] = mapping[1];
    });
    const { token } = queryParams;
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log('ERROR');
      console.log(e);
    }

    navigate('Login');
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
        <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            path="login/"
            component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
        };


export default App;
