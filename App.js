import './wdyr';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainApp from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {fetchTrendingTopics, fetchCollections} from './store/actions/topics';
import AuthApp from './src/navigation/AuthNavigation';
import TrackPlayer, {
  useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING,
} from 'react-native-track-player';
import store from './store';
import { fetchForYou } from './store/actions/userData';
import { navigationRef } from './src/navigation/RootNavigation';

const Stack = createStackNavigator();

store.dispatch(fetchTrendingTopics());
store.dispatch(fetchCollections());
// TODO move to a for You Specific API?
store.dispatch(fetchForYou());

// You can now get a ref directly to the DOM button:
const ref = React.createRef();

const App : () => React$Node = () => {

  // TODO - enable universal linking in ios
  const linking = {
    prefixes: ['https://banteraudio.com', 'https://www.banteraudio.com', 'https://banteraudio.com', 'banteraudio:'],
  };
  console.log('APP.js Render');
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
      </NavigationContainer>
    </Provider>
  );
        };


export default App;
