import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlaylistScreen from './screens/PlaylistScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import FriendsScreen from './FriendsScreen';
import LandingScreen from './screens/LandingScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
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
            options={{
              headerTitle: 'Pick your favorite teams!',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  style={{marginRight:10 }}
                >
                  <Text>Done</Text>
                </TouchableOpacity>
              ),
            }}

          />
           <Stack.Screen
            name="Friends"
            component={FriendsScreen}
          />
          <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="Playlist" component={PlaylistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', { name: 'Austin' })
//       }
//     />
//   );
// };
// const ProfileScreen = (props) => {
//   const {name} = props.route.params;
//   // const { params } = this.props.navigation.state;
//   const a = 'AAA';
//   return <Text>This is Jane's profile! {a} {name}</Text>;
// };


export default App;
