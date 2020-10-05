import TrackPlayer, {getCurrentTrack} from 'react-native-track-player';

export default {
  async currentTrack() {
    return await getCurrentTrack();
  },

  async startNewTrack(discussion) {
    const pitchAlgorithm = TrackPlayer.PITCH_ALGORITHM_VOICE;
    const {
      discussionId: id,
      description: title,
      podcastTitle: artist,
      episodePlaybackUrl: url,
      podcastThumbnailUrl: artwork,
      startTimeMillis: startTime,
    } = discussion;

    await TrackPlayer.reset();
    await TrackPlayer.add({id, title, artist, url, artwork, startTime, pitchAlgorithm});
    await TrackPlayer.play();
  },

  async togglePlayback() {
    const isPlaying = await TrackPlayer.getState() === TrackPlayer.STATE_PLAYING;

    if (isPlaying) {
      return await TrackPlayer.pause();
    } else {
      return await TrackPlayer.play();
    }
  },

  async skipToNext() {
    try {
      await TrackPlayer.skipToNext();
    } catch (_) {}
  },

  async skipToPrevious() {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (_) {}
  },
};
