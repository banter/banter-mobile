import TrackPlayer, {getCurrentTrack} from 'react-native-track-player';
import { PlaylistItem } from '../src/models';
import store from '../store';

export default {
  async currentTrack() {
    return await getCurrentTrack();
  },

  async startNewTrack(discussion) {
    const playlist = generatePlaylist(discussion.discussionId)
      .map(
        playlistItem => new PlaylistItem(playlistItem)
      );

    await TrackPlayer.reset();
    await TrackPlayer.add(playlist);
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

  async jumpAhead() {
    try {
      const newPosition = await TrackPlayer.getPosition() + 15;
      await TrackPlayer.seekTo(newPosition);
    } catch (_) {}
  },

  async jumpBack() {
    try {
      const newPosition = await TrackPlayer.getPosition() - 15;
      await TrackPlayer.seekTo(newPosition);
    } catch (_) {}
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

function generatePlaylist(currentItemId) {
  const currentState = store.getState();
  const currentPlaylist = currentState.topicState?.topicPlaylist;
  const currentItemIndex = currentPlaylist.findIndex(discussionItem => discussionItem.discussionId === currentItemId);

  return currentPlaylist.slice(currentItemIndex);
}
