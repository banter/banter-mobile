import TrackPlayer, {getCurrentTrack} from 'react-native-track-player';
import { PlaylistItem } from '../src/models';
import store from '../store';

export default {
  async currentTrack() {
    return await getCurrentTrack();
  },

  async startNewTrack(discussion, playlistType) {
    const playlist = generatePlaylist(discussion.discussionId, playlistType)
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

function generatePlaylist(discussionId, playlistType) {
  const currentState = store.getState();

  let  currentPlaylist;
  switch (playlistType) {
    case 'TOPIC':
      currentPlaylist =  currentState.topicState?.topicPlaylist;
      break;
    case 'FOR_YOU':
      currentPlaylist = currentState.userDataState?.forYou.playlist;
      break;
    default:
      currentPlaylist =  currentState.topicState?.topicPlaylist;
      break;
  }
  const currentItemIndex = currentPlaylist.findIndex(discussionItem => discussionItem.discussionId === discussionId);
  return currentPlaylist.slice(currentItemIndex);

}
