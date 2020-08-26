export default class PlaylistItem {
  constructor({
    name,
    uri,
    discussionId,
    startTime,
    endTime,
    thumbnailUrl,
    podcastTitle,
  }) {
    this.name = name;
    this.uri = uri;
    this.discussionId = discussionId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.thumbnailUrl = thumbnailUrl;
    this.podcastTitle = podcastTitle;
  }
}
