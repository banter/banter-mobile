import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'native-base';
import AudioService from '../services/AudioService.js';

export default function PlaybackIcon(props) {
  const { discussion } = props;

  function playAudio() {
    AudioService.playOrContinue(discussion);
  }

  return (
    <View>
      {AudioService.trackIsPlaying(discussion.discussionId) ? (
        <Icon style={styles.icon} classonPress={playAudio} name="play" />
      ) : (
        <Icon style={styles.icon} classonPress={AudioService.pauseAudio} name="pause" />
      )}
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
