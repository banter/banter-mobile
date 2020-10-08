import React from 'react';
import {DiscussionItem} from '../../models';
import {
  Card,
  CardItem,
  Text,
  Icon,
  Grid,
  Col,
  View,
  Thumbnail,
} from 'native-base';
import PropTypes from 'prop-types';
import {TagList, AudioPlayerActionBar} from '../molecules';
import {PlaybackIcon, LikeButton, ShareButton, ProgressBar} from '../atoms';
import {TouchableOpacity} from 'react-native-gesture-handler';
import mockDiscussions from '../../../constants/mock-discussions';
import {StyleSheet} from 'react-native';
import {TRANSPARENT, GRAY_DARK} from '../../styles/colors';
import {LARGE_CORNER_RADIUS} from '../../styles/card';
import {largeIconStyle, smallIconStyle} from '../../styles/icons';
import {CardStyle, Typography} from '../../styles';
import {WINDOW_WIDTH, WINDOW_HEIGHT} from '../../styles/mixins';
import { SCALE_8, MEDIUM_SPACING, SMALL_SPACING, BIG_SPACING } from '../../styles/spacing';

export default class ExpandedAudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    // FIXME this.props.topic.imageUrl works however, this.topic.imageUrl DOES NOT
    // work
    this.discussion = new DiscussionItem(this.props.discussion);
  }
  onPress() {
    alert('Preses');
  }
  render() {
    return (
      <View style={styles.container}>
        <Thumbnail
          square
          style={styles.largeThumbnailStyle}
          source={{
          uri: this.discussion.podcastThumbnailUrl,
        }}/>
        <Text numberOfLines={2} style={styles.titleText}>
          {this.discussion.episodeTitle}</Text>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {this.discussion.description}</Text>
        {/* <TagList tags={this.discussion.tags}/> */}
        <ProgressBar />
        <AudioPlayerActionBar discussion={this.discussion} />
      </View>
    );
  }

}

ExpandedAudioPlayer.propTypes = {
  discussion: PropTypes.object,
};

ExpandedAudioPlayer.defaultProps = {
  discussion: mockDiscussions,
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: TRANSPARENT,
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    // justifyContent: 'center',
  },

  largeThumbnailStyle: {
    borderRadius: 10,
    height: WINDOW_WIDTH - 120,
    width: WINDOW_WIDTH - 120,
    backgroundColor: 'white',
    marginTop: MEDIUM_SPACING,
    marginBottom:MEDIUM_SPACING,
  },

  dateAndTimeStyle: {
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: 'red',
  },

  titleText: {
    ...Typography.titleText,
  },
  descriptionText: {
    ...Typography.descriptionText,
    marginBottom:BIG_SPACING,
  },
  timestampText: {
    ...Typography.descriptionText,
    fontWeight: '500',
  },
  buttonText: {
    textAlign: 'center',
  },
});
