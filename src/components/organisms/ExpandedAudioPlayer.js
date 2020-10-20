import React from 'react';
import {
  Text,
  View,
  Thumbnail,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {TRANSPARENT, GRAY_DARK} from '../../styles/colors';
import {Typography} from '../../styles';
import {WINDOW_WIDTH} from '../../styles/mixins';
import { MEDIUM_SPACING, BIG_SPACING } from '../../styles/spacing';

import ControlButtonActionBar from '../molecules/ControlButtonActionBar';
import { ProgressBar } from '../atoms';
import { AudioPlayerActionBar } from '../molecules';

export default function ExpandedAudioPlayer(props){

    const AudioService = props.service;
    const isPlaying = props.playing;
    const track = props.playingTrack;
    console.log('In Expanded Audio Player');

    return (
      <View style={styles.container}>
        <Thumbnail
          square
          style={styles.largeThumbnailStyle}
          source={{
          uri: track.artwork,
        }}/>
        <Text numberOfLines={2} style={styles.titleText}>
          {track.artist}</Text>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {track.title}</Text>
        {/* <TagList tags={this.discussion.tags}/> */}
        <ProgressBar />
        <AudioPlayerActionBar service={AudioService} playing={isPlaying} />
      </View>
    );
}

ExpandedAudioPlayer.propTypes = {
  // discussion: PropTypes.object,
};

ExpandedAudioPlayer.defaultProps = {
  // discussion: mockDiscussions,
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: TRANSPARENT,
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    // justifyContent: 'center',
  },

  largeThumbnailStyle: {
    borderRadius: 10,
    height: WINDOW_WIDTH - 120,
    width: WINDOW_WIDTH - 120,
    backgroundColor: 'white',
    marginTop: MEDIUM_SPACING,
    marginBottom:MEDIUM_SPACING,
  },

  dateAndTimeStyle: {
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: 'red',
  },

  titleText: {
    ...Typography.titleText,
  },
  descriptionText: {
    ...Typography.descriptionText,
    marginBottom:BIG_SPACING,
  },
  timestampText: {
    ...Typography.descriptionText,
    fontWeight: '500',
  },
  buttonText: {
    textAlign: 'center',
  },
});
