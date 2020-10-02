import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainApp from './src/navigation/AppNavigation';
import allReducers from './store/reducers/index.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {fetchTrendingTopics, fetchCollections} from './store/actions/topics';
import {composeWithDevTools} from 'redux-devtools-extension';
import AuthApp from './src/navigation/AuthNavigation';
import { FooterPlayer } from './src/components/organisms';
import ForYouScreen from './src/screens/ForYouScreen';

const Stack = createStackNavigator();

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

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
        component={ForYouScreen}
        name="For You"/>
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
