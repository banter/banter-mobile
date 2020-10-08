import React from 'react';
import {Thumbnail, Text, Card, CardItem} from 'native-base';
import {StyleSheet, View, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import { TagItem } from '../../models';
import {ImageStyle, CardStyle} from '../../styles';

export default function TopicCard(props){
  const navigation = useNavigation();
  const tag = new TagItem(props.topic.tag);
    return (

      <View style={styles.container}>
        <Pressable
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
        </Pressable>
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
    ...CardStyle.centeredTransparentCardItem,
  },

  topicCardText: {
    color: 'white',
  },

  largeThumbnailStyle: {
    ...ImageStyle.largeThumbnailStyle,
  },
});
