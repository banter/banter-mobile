import {PITCH_ALGORITHM_VOICE} from 'react-native-track-player';
export default class PlaylistItem {
  constructor(discussion) {
      this.id = discussion.discussionId,
      this.title = discussion.description,
      this.artist = discussion.podcastTitle,
      this.url = discussion.episodePlaybackUrl,
      this.artwork = discussion.podcastThumbnailUrl,
      this.startTime = discussion.startTimeMillis,
      this.pitchAlgorithm = PITCH_ALGORITHM_VOICE;
  }
}
