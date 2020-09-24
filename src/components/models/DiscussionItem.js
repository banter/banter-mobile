export default class DiscussionItem {
    constructor({
        podcastId,
        discussionId,
        podcastTitle,
        podcastThumbnailUrl,
        tags,
        episodeId,
        episodeTitle,
        episodePlaybackUrl,
        episodePublishDate,
        description,
        startTime,
        startTimeMillis,
        endTime,
        endTimeMillis,
        duration,
        isEndTimeEstimated,
        hasUserLiked,
        userListenProgress,
        likedCount,
        playedCount,
    }) {
        this.podcastId = podcastId;
        this.discussionId = discussionId;
        this.podcastTitle = podcastTitle;
        this.podcastThumbnailUrl = podcastThumbnailUrl;
        this.tags = tags;
        this.episodeId = episodeId;
        this.episodeTitle = episodeTitle;
        this.episodePlaybackUrl = episodePlaybackUrl;
        this.episodePublishDate = episodePublishDate;
        this.description = description;
        this.startTime = startTime;
        this.startTimeMillis = startTimeMillis;
        this.endTime = endTime;
        this.endTimeMillis = endTimeMillis;
        this.duration = duration;
        this.isEndTimeEstimated = isEndTimeEstimated;
        this.hasUserLiked = hasUserLiked;
        this.userListenProgress = userListenProgress;
        this.likedCount = likedCount;
        this.playedCount = playedCount;
    }
  }
