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
import TagList from '../../containers/TagList';
import DiscussionItem from '../../models/DiscussionItem';
import FollowButton from '../buttons/FollowButton';


export default class TopicHeaderCard extends React.Component {
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
        <Card transparent style={styles.discussionCard}>
          <CardItem style={styles.discussionCardItem}>
            <Grid>
              <Col style={{
                width: 125,
              }}>
                <Thumbnail
                  style={styles.largeThumbnailStyle}
                  square
                  source={{uri: this.discussion.podcastThumbnailUrl}}/>
              </Col>
              <Col style={styles.headerContent}>
                <Text numberOfLines={2} style={styles.headerText}>
                  {/* {this.discussion.episodeTitle} */}
                  Lebron James
                  </Text>
                  <FollowButton style={styles.headerText}/>
              </Col>
            </Grid>
          </CardItem >
          <CardItem style={styles.discussionCardTagItem}>
            <TagList tags={[{'value':'Lakers'}, {'value':'NBA'}, {'value':'Basketball'}]}/>
          </CardItem>
        </Card>

      </View>
    );
  }

}

const CARD_COLOR = '#282828';
const CARD_RADIUS = 20;
const LARGE_ICON_SIZE = 42;
const LARGE_IMAGE_SIZE = 110;
const styles = StyleSheet.create({

  container: {
    // backgroundColor: 'lightgray',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContent: {
justifyContent: 'center',
  },

  discussionCard: {
    // backgroundColor: CARD_COLOR,
    // alignItems: 'center',
    width: '90%',
    borderRadius: CARD_RADIUS,
  },

  dateAndTimeStyle: {
    justifyContent: 'center',
    paddingLeft: 10,
  },

  largeIconStyle: {
    fontSize: LARGE_ICON_SIZE,
    color: 'white',
  },

  largeThumbnailStyle: {
    borderRadius: 10,
    height: LARGE_IMAGE_SIZE,
    width:LARGE_IMAGE_SIZE,
  },

  discussionCardItem: {
    paddingVertical: -5,
    backgroundColor: 'transparent',
    borderRadius: CARD_RADIUS,
    paddingBottom: 5,
    paddingTop: 8,
  },

  discussionCardTagItem: {
    paddingVertical: -5,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: CARD_RADIUS,
    paddingBottom: 5,
    paddingTop: 8,
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom:15,
  },
  descriptionText: {
    fontSize: 15,
    color: '#AAAAAA',
  },
  buttonText: {
    textAlign: 'center',
  },
});
