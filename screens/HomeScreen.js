import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Text,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Content,
  Spinner,
  Body,
  Thumbnail,
} from 'native-base';

import {connect} from 'react-redux';
import TopicCarousel from '../containers/TopicCarousel';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    const {
      navigation,
      trendingTopics,
      collections,
      isTrendingTopicsLoading,
      isCollectionsLoading,
      isLoading,
      error,
    } = this.props;
    if (isCollectionsLoading) {
      return (
        <View style={{
          flex: 1,
          padding: 20,
        }}>
          <Content>
            <Spinner color="black"/>
          </Content>
        </View>
      );
    }

    const {selected} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <TopicCarousel itemsPerInterval={1} relatedTopics={trendingTopics}/>
            {collections.length > 0
              ? (collections.map((collection, index) => {
                return (<TopicCarousel
                  key = {index}
                  itemsPerInterval={1}
                  primaryTopic={collection.primaryTopic}
                  relatedTopics={collection.relatedTopics}/>);
              }))
              : (
                <View>
                  <Text>No Stuff</Text>
                  <Text>{error}</Text>
                </View>
              )}
          <List>
            {topics.length > 0 ? (
              topics.map((topic) => {
                return (
                  <ListItem
                    selected={selected === topic.tag.id}
                    onPressOut={() =>
                      navigation.navigate('Playlist', {
                        topic: topic.tag,
                      })
                    }
                    thumbnail
                    onPressIn={() => {
                      this.setState({selected: topic.tag.id});
                    }}
                    key={`topic-${topic.tag.id}-key`}
                    style={[
                      styles.codeHighlightContainer,
                      styles.homeScreenFilename,
                    ]}>
                    <Left>
                      <Thumbnail square source={{uri: topic.tag.imageUrl}} />
                    </Left>
                    <Body>
                      <Text>{topic.tag.value}</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                );
              })
            ) : (
              <View>
                <Text>No Stuff</Text>
                <Text>{error}</Text>
              </View>
            )}
          </List>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

function mapStateToProps(state) {
  return {
trendingTopics: state.topicState.trendingTopics, 
collections: state.topicState.collections, 
error: state.topicState.errorMessage, 
isTrendingTopicsLoading: state.topicState.isTrendingTopicsLoading, 
isCollectionsLoading: state.topicState.isCollectionsLoading,
    isLoading: state.topicState.isLoading,
topics: state.topicState.topics,
};
}

export default connect(mapStateToProps)(HomeScreen);
