import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlaylistScreen from './screens/PlaylistScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import FriendsScreen from './FriendsScreen';
import EnterPage from './EnterPage';
import LandingPage from './LandingPage';

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
            component={LandingPage}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Enter"
            component={EnterPage}
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
