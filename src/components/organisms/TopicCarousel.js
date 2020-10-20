import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import {Text} from 'native-base';
import { containerStyles } from './styles';
import { TopicCard } from '.';

export const TopicCarousel = (props: any) => {
  const { primaryTopic, relatedTopics, style } = props;

  return (
    <SafeAreaView style={containerStyles.container}>
        <Text style={styles.topicCarouselText}>{primaryTopic === undefined ?
        'Trending' : primaryTopic.tag.value}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{...styles.scrollView}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast">
        {relatedTopics.map((topic: any, index: number) => {
          switch (style) {
            default:
              return (
                <TopicCard key={index}  topic={topic} />
              );
          }
        })}
      </ScrollView>
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
