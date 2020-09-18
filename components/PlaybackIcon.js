import React from 'react';
import PropTypes from 'prop-types';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
import { View } from 'react-native';
import { Icon } from 'native-base';

export default function PlaybackIcon(props) {
  const playbackState = usePlaybackState();

  const { playlistItem } = props;

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: playlistItem.discussionId,
        title: playlistItem.name,
        artist: playlistItem.podcastTitle,
        url: playlistItem.uri,
        artwork: playlistItem.thumbnailUrl,
      });
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  return (
    <View>
      {playbackState === TrackPlayer.STATE_PAUSED ? (
        <Icon onPress={togglePlayback} name="play" />
      ) : (
        <Icon onPress={togglePlayback} name="pause" />
      )}
    </View>
  );
}

PlaybackIcon.propTypes = {
  playlistItem: PropTypes.object.isRequired,
};
