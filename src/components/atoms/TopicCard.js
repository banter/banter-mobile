import React from 'react';
import {Thumbnail, Text, Card, CardItem} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import { TagItem } from '../../models';
import {ImageStyle, CardStyle} from '../../styles';
import { LARGE_CORNER_RADIUS } from '../../styles/card';



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
