import TrackPlayer, { usePlaybackState } from 'react-native-track-player';

export default {
  usePlaybackState,

  async currentTrack() {
    return await TrackPlayer.getCurrentTrack();
  },

  async currentState () {
    return await TrackPlayer.getState();
  },

  async playOrContinue (discussion) {
    if (this.currentTrack().discussionId === discussion.discussionId) {
      TrackPlayer.play();
    } else {
      this.startNewTrack(discussion);
    }
  },

  async trackIsPlaying (discussionId) {
    return this.currentTrack().discussionId === discussionId && this.isPlaying();
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

  async pauseAudio() {
    await TrackPlayer.pause();
  },

  async isPlaying() {
    const currentState = await TrackPlayer.getState();
    return currentState === TrackPlayer.STATE_PLAYING;
  },

  async togglePlayback() {
    const isPlaying = await this.isPlaying();

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
