import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {Icon} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import ForYouScreen from '../screens/ForYouScreen';
import ExploreScreen from '../screens/ExploreScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import MOCKDISCUSSIONS from '../../constants/mock-discussions';
import TrackPlayer, {
  useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING,
} from 'react-native-track-player';
import { SwipeUpDown, ExpandedAudioPlayer } from '../components/organisms';

const AppNavigator = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'App';

const Stack = createStackNavigator();




const watchedEvents = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
];



function MyTabBar({ state, descriptors, navigation }) {

    const [track, setTrack] = React.useState('');
  const [playerState, setPlayerState] = React.useState(null);

  useTrackPlayerEvents(watchedEvents, async (event) => {
    switch (event.type) {
      case TrackPlayerEvents.PLAYBACK_ERROR:
        console.warn('An error occured while playing the current track.');
        break;
      case TrackPlayerEvents.PLAYBACK_STATE:
        setPlayerState(event.state);
        break;
      case TrackPlayerEvents.PLAYBACK_TRACK_CHANGED:
        const currentTrack = await TrackPlayer.getTrack(event.nextTrack);
        setTrack(currentTrack);
        break;
      default:
        break;
    }
  });

  const isPlaying = playerState === STATE_PLAYING;








  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* {track ?
      <SwipeUpDown
	itemMini={<Text>AA</Text>} // Pass props component when collapsed
	itemFull={<Text>AA</Text>} // Pass props component when collapsed
	onShowMini={() => console.log('mini')}
	onShowFull={() => console.log('full')}
  onMoveDown={() => console.log('down')}
  swipeHeight={120}
	onMoveUp={() => console.log('up')}
	disablePressToShow={false} // Press item mini to show full
/> : null} */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}





function HomeStack() {
  console.log('HOME STACK RENDER');
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
        headerShown: false,
      }}
        component={HomeScreen}
        name="Home"/>
        <Stack.Screen name="Playlist" component={PlaylistScreen}/>
    </Stack.Navigator>
  );
}


function ForYouStack() {
  console.log('FOR YOU STACK RENDER');
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
        headerShown: false,
      }}
        component={ForYouScreen}
        name="For You"/>
        <Stack.Screen name="Playlist" component={PlaylistScreen}/>
    </Stack.Navigator>
  );
}

export default function MainApp({navigation, route}) {
  console.log('MAIN APP Render');
  return (
  <AppNavigator.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <AppNavigator.Screen
        name="For You"
        component={ForYouStack}
        options={{
        tabBarLabel: 'For You',
        tabBarIcon: () => (<Icon type="Entypo" name="fingerprint"/>),
      }}/>
      <AppNavigator.Screen
        name="Home"
        component={HomeStack}
        options={{
        headerShown: false,
        tabBarIcon: () => (<Icon type="Entypo" name="home"/>),
      }}/>
      <AppNavigator.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
        tabBarLabel: 'Explore',
        tabBarIcon: () => (<Icon name="ios-search"/>),
      }}/>
    </AppNavigator.Navigator>
  );
}
