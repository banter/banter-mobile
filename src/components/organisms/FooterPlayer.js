import React, { useState } from 'react';
import TrackPlayer, {
  useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING,
} from 'react-native-track-player';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from 'native-base';

import AudioService from '../../../services/AudioService';
import { ProgressBar, ControlButton } from '../atoms';

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
        <Image style={styles.cover} source={{ uri: track.artwork }} />
        <ProgressBar />
        <Text style={styles.title}>{track.title}</Text>
        <Text style={styles.artist}>{track.artist}</Text>
        <View style={styles.controls}>
          <ControlButton icon={'play-skip-back-outline'} onPress={AudioService.skipToPrevious} />
          <ControlButton style={styles.backTime} icon={'refresh'} onPress={AudioService.jumpBack} />
          <ControlButton style={styles.largeIcon} icon={isPlaying ? 'pause' : 'play-outline'} onPress={AudioService.togglePlayback} />
          <ControlButton icon={'refresh'} onPress={AudioService.jumpAhead} />
          <ControlButton icon={'play-skip-forward-outline'} onPress={AudioService.skipToNext} />
        </View>
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
    marginTop: 15,
    marginBottom: 30,
    flexDirection: 'row',
  },
  largeIcon: {
    fontSize: 24,
  },
  backTime: {
    transform: [{rotateY: '180deg'}],
  },
});

