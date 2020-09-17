import 'react-native-gesture-handler';
import * as React from 'react';
import {Text } from 'react-native';
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
import ExperienceCreationScreen from './screens/ExperienceCreationScreen';
import LandingScreen from './screens/LandingScreen';
import ForYouScreen from './screens/ForYouScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
            <Stack.Screen
            options={{headerShown: false}}
            name="Landing"
            component={LandingScreen}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={({ navigation }) => ({
              headerTitle: 'Pick your favorite teams!',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ExperienceCreation')}
                  title="Info"
                  style={{ marginRight:10 }}
                >
                  <Text>Done</Text>
                </TouchableOpacity>
              ),
            })}
          />
           <Stack.Screen
            name="ExperienceCreation"
            options={{headerShown: false}}
            component={ExperienceCreationScreen}
          />
                            <Stack.Screen
            options={{headerShown: false}}
            name="ForYou"
            component={ForYouScreen}
          />
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="Playlist" component={PlaylistScreen} />
      </Stack.Navigator>
      {/* <BottomTabNavigator /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
