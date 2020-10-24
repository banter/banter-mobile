import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, FlatList} from 'react-native';
import {Text} from 'native-base';
import { containerStyles } from './styles';
import { TopicCard } from '.';

export const TopicCarousel = (props: any) => {
  const { primaryTopic, relatedTopics, style } = props;

  return (
    <SafeAreaView style={containerStyles.container}>
        <Text style={styles.topicCarouselText}>{primaryTopic === undefined ?
        'Trending' : primaryTopic.tag.value}</Text>
                    <FlatList
            data={relatedTopics}
            horizontal={true}
            maxToRenderPerBatch={15}
            initialNumToRender={3}
            renderItem={({ item, index, separators }) => (
              <TopicCard key={index}  topic={item} />
            )}
            keyExtractor={item => item.tag.id}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  topicCarouselText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 10,
  },
});


export default TopicCarousel;
