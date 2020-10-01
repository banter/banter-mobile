import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {Text} from 'native-base';
import { containerStyles } from './styles';
import { TopicCard } from '.';
import { LARGE_IMAGE_SIZE } from '../../styles/images';

export const TopicCarousel = (props: any) => {

  const { primaryTopic, relatedTopics, style } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
    ? 1
    : props.itemsPerInterval;

  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width: number) => {
    // initialise width

    setWidth(width);
    // initialise total intervals
    const totalItems = relatedTopics.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  return (
    <View style={containerStyles.container}>
        <Text style={styles.topicCarouselText}>{primaryTopic === undefined ?
        'Trending' : primaryTopic.tag.value}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${LARGE_IMAGE_SIZE * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {relatedTopics.map((topic: any, index: number) => {
          switch (style) {
            default:
              return (
                  <TopicCard key={index}  topic={topic} />
              );
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor:'transparent',
    justifyContent:'center',
  alignSelf:'center'},
  topicCarouselText:{
    color: 'white',
    fontSize:25,
    marginLeft: 10,
},

  });


export default TopicCarousel;
