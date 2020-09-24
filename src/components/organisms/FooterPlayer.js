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
import { Icon } from 'native-base';

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
          <ControlButton title={'<<'} onPress={AudioService.skipToPrevious} />
          <Icon
            style={styles.icon}
            onPress={AudioService.togglePlayback}
            name={isPlaying ? 'pause' : 'play'}  />
          <ControlButton title={'>>'} onPress={AudioService.skipToNext} />
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
    marginVertical: 20,
    flexDirection: 'row',
  },
});

