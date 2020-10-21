/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {
  Thumbnail,
  Card,
  CardItem,
  Text,
  Icon,
  Grid,
  Col,
} from 'native-base';
import { DiscussionItem } from '../../models';
import { PlaybackIcon } from '../atoms';
import { TagList } from '.';
import { CardStyle, Typography } from '../../styles';
import { GRAY_DARK, TRANSPARENT } from '../../styles/colors';
import { LARGE_CORNER_RADIUS } from '../../styles/card';
import howLongAgo from '../../../utils/date-format';

import dayjs from 'dayjs';
import dayDuration from 'dayjs/plugin/duration';
import dayUtc from 'dayjs/plugin/utc';

dayjs.extend(dayUtc);
dayjs.extend(dayDuration);

import { largeIconStyle, smallIconStyle } from '../../styles/icons';

export default class DiscussionCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.discussion = new DiscussionItem(this.props.discussion);
  }

  discussionAge({ year, monthValue: month, dayOfMonth: day }) {
    return howLongAgo({ year, month, day }, this.$dayjs);
  }
  discussionTime(discussion) {
    let duration;
    try {
      duration = dayjs.utc(dayjs.duration(discussion.duration).as('milliseconds')).format('m:ss');
    } catch (e) {
      duration = '';
    }
    return duration === '0:00' ? '' : duration;
  }

  onPress() {
    alert('Preses');
  }
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.discussionCard}>
          <CardItem style={styles.discussionCardItem}>
            <Grid>
              <Col style={{
                width: 90,
              }}>
                <Thumbnail
                  style={styles.thumbnailStyle}
                  square
                  large
                  source={{uri: this.discussion.podcastThumbnailUrl}}/>
              </Col>
              <Col>
                <Text numberOfLines={2} style={styles.titleText}>
                  {this.discussion.episodeTitle}</Text>
                <Text style={styles.descriptionText}>{this.discussion.podcastTitle}</Text>
              </Col>
              <Col style={{
                width: 20,
              }}>
                <Pressable onPress={this.onPress}>
                  <Icon
                    type="Feather"
                    name="more-vertical"
                    style={{
                    color: 'white',
                  }}/>
                </Pressable>
              </Col>
            </Grid>
          </CardItem >
          <CardItem style={styles.discussionCardItem}>
            <Text numberOfLines={2} style={styles.descriptionText}>
              {this.discussion.description}</Text>
          </CardItem>
          <CardItem style={styles.discussionCardTagItem}>
            <TagList tags={this.discussion.tags}/>
          </CardItem>
          <CardItem style={styles.discussionCardItem}>
            <Grid>
              <Col style={{ width: 50 }}>
                <PlaybackIcon discussion={this.discussion}/>
              </Col>
              <Col style={styles.dateAndTimeStyle}>
                <Text style={styles.timestampText}>
                {this.discussionAge(this.discussion.episodePublishDate)}
                 • {this.discussionTime(this.discussion)}
                </Text>
              </Col>
              <Col style={{ width: 50 }}>
                <Pressable onPress={this.onPress}>
                  <Text>
                    <Icon name="heart" style={styles.largeIconStyle}/>
                  </Text>
                </Pressable>
              </Col>
            </Grid>
          </CardItem>
        </Card>

      </View>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    backgroundColor: TRANSPARENT,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  discussionCard: {
    backgroundColor: GRAY_DARK,
    // alignItems: 'center',
    width: '90%',
    borderRadius: LARGE_CORNER_RADIUS,
  },

  dateAndTimeStyle: {
    justifyContent: 'center',
    paddingLeft: 10,
  },

  largeIconStyle: {
    ...largeIconStyle,
  },
  smallIconStyle: {
    ...smallIconStyle,
  },

  thumbnailStyle: {
    borderRadius: 10,
  },

  discussionCardItem: {
    ...CardStyle.cardItem,
  },

  discussionCardTagItem: {
    ...CardStyle.cardItem,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  titleText: {
...Typography.titleText,
  },
  descriptionText: {
    ...Typography.descriptionText,
  },
  timestampText: {
    ...Typography.descriptionText,
    fontWeight: '500',
  },
  buttonText: {
    textAlign: 'center',
  },
});
