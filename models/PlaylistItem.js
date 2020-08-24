export default class PlaylistItem {
  constructor({name, uri, discussionId, startTime, endTime}) {
    this.name = name;
    this.uri = uri;
    this.discussionId = discussionId;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}