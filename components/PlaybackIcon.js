import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'native-base';
import AudioService from '../services/AudioService.js';

export default function PlaybackIcon(props) {
  const { playlistItem } = props;

  function playAudio() {
    AudioService.playOrContinue(playlistItem);
  }

  return (
    <View>
      {AudioService.trackIsPlaying(playlistItem.discussionId) ? (
        <Icon onPress={playAudio} name="play" />
      ) : (
        <Icon onPress={AudioService.pauseAudio} name="pause" />
      )}
    </View>
  );
}

PlaybackIcon.propTypes = {
  playlistItem: PropTypes.object.isRequired,
};
