import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrackPlayer, {
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
} from 'react-native';
import ProgressBar from './ProgressBar.js';
import ControlButton from './ControlButton.js';
import PlaybackIcon from './PlaybackIcon';

export default function Player(props) {
  const [track, setTrack] = useState('');
  useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const currentTrack = await TrackPlayer.getTrack(event.nextTrack);
      setTrack(currentTrack);
    }
  });

  const { onNext, onPrevious } = props;

  return (
    <View>
      {track ? <View style={styles.card}>
        <Image style={styles.cover} source={{ uri: track.artwork }} />
        <ProgressBar />
        <Text style={styles.title}>{track.title}</Text>
        <Text style={styles.artist}>{track.artist}</Text>
        <View style={styles.controls}>
          <ControlButton title={'<<'} onPress={onPrevious} />
          <PlaybackIcon discussion={track}/>
          <ControlButton title={'>>'} onPress={onNext} />
        </View>
      </View> : null}
    </View>
  );
}

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
};

Player.defaultProps = {
  style: {},
};

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

