import TagItem from './TagItem';
// FIXME
export default class TopicItem {
    constructor({
      tag,
      discussionCount,
    }) {
        // This Doesnt Work
      this.tag =  new TagItem(tag);
      this.discussionCount = discussionCount;
    }
  }
