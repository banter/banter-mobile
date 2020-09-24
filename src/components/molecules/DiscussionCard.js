import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Thumbnail,
  Card,
  CardItem,
  Text,
  Icon,
  Grid,
  Col,
} from 'native-base';
import AudioService from '../../../services/AudioService';
import { DiscussionItem } from '../../models';
import { PlaybackIcon } from '../atoms';
import { TagList } from '.';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { CardStyle, Typography } from '../../styles';
import { GRAY_DARK } from '../../styles/colors';
import { LARGE_CORNER_RADIUS } from '../../styles/card';

export default class DiscussionCard extends React.Component {
  constructor(props) {
    super(props);
    this.discussion = new DiscussionItem(this.props.discussion);
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
                <TouchableOpacity onPress={this.onPress}>
                  <Icon
                    type="Feather"
                    name="more-vertical"
                    style={{
                    color: 'white',
                  }}/>
                </TouchableOpacity>
              </Col>
            </Grid>
          </CardItem >
          <CardItem style={styles.discussionCardItem}>
            <Text numberOfLines={2} style={styles.descriptionText}>
              {this.discussion.description}</Text>
          </CardItem>
          <CardItem style={styles.discussionCardTagItem}>
            <Icon
              type="AntDesign"
              name="tag"
              style={{color: 'white'}}
            />
            <TagList tags={this.discussion.tags}/>
          </CardItem>

          <CardItem style={styles.discussionCardItem}>
            <Grid>
              <Col style={{ width: 50 }}>
                <PlaybackIcon discussion={this.discussion}/>
              </Col>
              <Col style={styles.dateAndTimeStyle}>
                <Text style={styles.descriptionText}>
                  DATE
                </Text>
              </Col>
              <Col style={{ width: 50 }}>
                <TouchableOpacity onPress={this.onPress}>
                  <Text>
                    <Icon name="heart" style={styles.largeIconStyle}/>
                  </Text>
                </TouchableOpacity>
              </Col>
            </Grid>
          </CardItem>
        </Card>

      </View>
    );
  }

}

const LARGE_ICON_SIZE = 42;
const styles = StyleSheet.create({

  container: {
    // backgroundColor: 'lightgray',
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
    fontSize: LARGE_ICON_SIZE,
    color: 'white',
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
  buttonText: {
    textAlign: 'center',
  },
});
