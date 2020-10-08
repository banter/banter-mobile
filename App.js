import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainApp from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {fetchTrendingTopics, fetchCollections} from './store/actions/topics';
import AuthApp from './src/navigation/AuthNavigation';
import { FooterPlayer, CollapsedAudioPlayer, SwipeUpDown, ExpandedAudioPlayer } from './src/components/organisms';
import ForYouScreen from './src/screens/ForYouScreen';
import TrackPlayer, {
  useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING,
} from 'react-native-track-player';
import store from './store';
import { fetchForYou } from './store/actions/userData';
import { Text } from 'native-base';
import MOCKDISCUSSIONS from './constants/mock-discussions';
import { navigationRef } from './src/navigation/RootNavigation';

const Stack = createStackNavigator();

store.dispatch(fetchTrendingTopics());
store.dispatch(fetchCollections());
// TODO move to a for You Specific API?
store.dispatch(fetchForYou());


const watchedEvents = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
];

const App : () => React$Node = () => {

  const linking = {
    prefixes: ['https://banteraudio.com', 'https://www.banteraudio.com', 'https://banteraudio.com', 'banteraudio:'],
  };

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

  console.log('APP.js Render');
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} linking={linking}>
        <Stack.Navigator>
        {/* <Stack.Screen
        options={{
        headerShown: false,
      }}
        component={ForYouScreen}
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
        <CollapsedAudioPlayer />
{track ?
      <SwipeUpDown
	itemMini={<CollapsedAudioPlayer />} // Pass props component when collapsed
	itemFull={<ExpandedAudioPlayer discussion={MOCKDISCUSSIONS} />} // Pass props component when show full
	onShowMini={() => console.log('mini')}
	onShowFull={() => console.log('full')}
  onMoveDown={() => console.log('down')}
  swipeHeight={120}
	onMoveUp={() => console.log('up')}
	disablePressToShow={false} // Press item mini to show full
/> : null}
      </NavigationContainer>
    </Provider>
  );
        };

export default App;
