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
import {FollowButton} from '../atoms';

export default class TopicHeaderCard extends React.Component {
  constructor(props) {
    super(props);
    // FIXME this.props.topic.imageUrl works however, this.topic.imageUrl DOES NOT work
    this.topic = this.props.topic;
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
                  source={{
                  uri: this.props.topic.imageUrl,
                }}/>
              </Col>
              <Col style={styles.headerContent}>
                <Text numberOfLines={2} style={styles.headerText}>
                  {this.props.topic.value}
                </Text>
                <FollowButton style={styles.headerText}/>
              </Col>
            </Grid>
          </CardItem >
          <CardItem style={styles.discussionCardTagItem}>
            {/* TODO Add Future Associated Tags */}
            {/* <TagList tags={[{'value':'Lakers'}, {'value':'NBA'}, {'value':'Basketball'}]}/> */}
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
    // backgroundColor: CARD_COLOR, alignItems: 'center',
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
    width: LARGE_IMAGE_SIZE,
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
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 15,
    color: '#AAAAAA',
  },
  buttonText: {
    textAlign: 'center',
  },
});
