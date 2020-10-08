import React, { useState } from 'react';
import TrackPlayer, {
  useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING,
} from 'react-native-track-player';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SwipeUpDown from './SwipeUpDown';
import MOCKDISCUSSIONS from '../../../constants/mock-discussions';
import { CollapsedAudioPlayer, ExpandedAudioPlayer } from '.';

const watchedEvents = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
];
export default function FooterPlayer(props) {
  const [track, setTrack] = useState('');
  const [playerState, setPlayerState] = useState(null);

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

  return (
    <View>
      {track ? <View style={styles.card}>
      <SwipeUpDown
	itemMini={<CollapsedAudioPlayer />} // Pass props component when collapsed
	itemFull={<ExpandedAudioPlayer discussion={MOCKDISCUSSIONS} />} // Pass props component when show full
	onShowMini={() => console.log('mini')}
	onShowFull={() => console.log('full')}
  onMoveDown={() => console.log('down')}
  swipeHeight={120}
	onMoveUp={() => console.log('up')}
	disablePressToShow={false} // Press item mini to show full
/>
      </View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    shadowOpacity: 0.1,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    shadowOffset: { width: 0, height: 1 },
  },
  cover: {
    width: 40,
    height: 40,
    marginTop: 5,
    backgroundColor: 'grey',
  },
  title: {
    marginTop: 5,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
});

