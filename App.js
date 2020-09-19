import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlaylistScreen from './screens/PlaylistScreen';
import MainApp from './navigation/MainApp';
import allReducers from './store/reducers/index.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {fetchTrendingTopics, fetchCollections} from './store/actions/topics';
import {composeWithDevTools} from 'redux-devtools-extension';
import ExperienceCreationScreen from './screens/ExperienceCreationScreen';
import LandingScreen from './screens/LandingScreen';
import ForYouScreen from './screens/ForYouScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(fetchTrendingTopics());
store.dispatch(fetchCollections());

const App : () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
            name="Home"
            component={HomeScreen}
            options={{
            title: 'Welcome',
          }}/>
          <Stack.Screen
            name="ExperienceCreation"
            options={{
            headerShown: false,
          }}
            component={ExperienceCreationScreen}/>
          <Stack.Screen
            options={{
            headerShown: false,
          }}
            name="ForYou"
            component={ForYouScreen}/>
          <Stack.Screen name="Playlist" component={PlaylistScreen}/>
        </Stack.Navigator>
        {/* <BottomTabNavigator /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
