import React from 'react';
import {Thumbnail, Text, Card, CardItem} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import TagItem from '../../src/components/models/TagItem';
import {useNavigation} from '@react-navigation/native';



export default function TopicCard(props){
  const navigation = useNavigation();
  const tag = new TagItem(props.topic.tag);
    return (

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.topicImage}
          onPress={() => navigation.navigate('Playlist', {topic: tag})}>
          <Card transparent style={styles.discussionCard}>
            <CardItem style={styles.topicCardItem}>
              <Thumbnail
                style={styles.largeThumbnailStyle}
                square
                source={{
                uri: tag.imageUrl,
              }}/>
            </CardItem >
            <CardItem style={styles.topicCardItem}>
              <Text style={styles.topicCardText}>{tag.value}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>

      </View>

    );
}

TopicCard.propTypes = {
  topic: PropTypes.object,
  size: PropTypes.string,
};

TopicCard.defaultProps = {
  topic: {},
  size: 'large',
};

const CARD_COLOR = '#282828';
const CARD_RADIUS = 20;
const LARGE_ICON_SIZE = 42;
const LARGE_IMAGE_SIZE = 130;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  topicImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  topicCardItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: -5,
    paddingLeft: -3,
    backgroundColor: 'transparent',
    borderRadius: CARD_RADIUS,
    paddingBottom: 5,
    paddingTop: 5,
  },

  topicCardText: {
    color: 'white',
  },

  largeThumbnailStyle: {
    borderRadius: 10,
    height: LARGE_IMAGE_SIZE,
    width: LARGE_IMAGE_SIZE,
    backgroundColor: 'white',
  },
});
