import * as React from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import {
  Text,
  Content,
  Spinner,
} from 'native-base';

import {connect} from 'react-redux';
import { TopicCarousel, FooterPlayer } from '../components/organisms';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    const {
      trendingTopics,
      collections,
      isCollectionsLoading,
      error,
    } = this.props;
    if (isCollectionsLoading) {
      return (
        <View style={styles.loadingContainer}>
          <Content>
            <Spinner color="black"/>
          </Content>
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
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
                  <Text>No Stuff</Text>q
                </View>
              )}
        </ScrollView>
        <FooterPlayer/>
      </SafeAreaView>
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
  loadingContainer: {
    flex: 1,
    padding: 20,
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
