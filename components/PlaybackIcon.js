import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'native-base';
import TrackPlayer, { useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING } from 'react-native-track-player';

import AudioService from '../services/AudioService.js';

const watchedEvents = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
];

export default function PlaybackIcon(props) {
  const { discussion } = props;
  const [playerState, setPlayerState] = useState(null);
  const [currentTrack, setCurrentTrack] = useState('');

  useTrackPlayerEvents(watchedEvents, async (event) => {
    switch (event.type) {
      case TrackPlayerEvents.PLAYBACK_ERROR:
        console.warn('An error occured while playing the current track.');
        break;
      case TrackPlayerEvents.PLAYBACK_STATE:
        setPlayerState(event.state);
        break;
      case TrackPlayerEvents.PLAYBACK_TRACK_CHANGED:
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        setCurrentTrack(playingTrack);
        break;
      default:
        break;
    }
  });
  const playingThisDiscussion = currentTrack.id === discussion.discussionId;
  const isPlaying = playingThisDiscussion && playerState === STATE_PLAYING;

  return (
    <View>
        <Icon
          style={styles.icon}
          onPress={playingThisDiscussion ? AudioService.togglePlayback : () => AudioService.startNewTrack(discussion)}
          name={isPlaying ? 'pause' : 'play'} />
    </View>
  );
}

PlaybackIcon.propTypes = {
  discussion: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
});
