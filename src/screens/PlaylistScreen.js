import * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentTopic, fetchTopic } from '../../store/actions/topics';

import {
  Spinner,
} from 'native-base';

import {DiscussionCard} from '../components/molecules';
import TopicHeaderCard from '../components/organisms/TopicHeaderCard';
import { FooterPlayer } from '../components/organisms';
import { FlatList } from 'react-native-gesture-handler';

class PlaylistScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {topic} = this.props.route.params;
    const {getTopic} = this.props;

    getTopic(topic.id);
  }

  renderHeader = (topic) => {
    return <TopicHeaderCard topic={topic}/>;
  };

  render() {
    const {playlist, isRequestingTopic, topic} = this.props;
    if (isRequestingTopic) {
      return (
        <SafeAreaView style={styles.container}>
            <Spinner color="white"/>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={playlist}
          maxToRenderPerBatch={5}
          initialNumToRender={1}
          ListHeaderComponent={this.renderHeader(topic)}
          renderItem={({ item, index, separators }) => (
            <DiscussionCard
              key={`card-${item.discussionId}`}
              playlistType={'TOPIC'}
              discussion={item}/>
            )}
          keyExtractor={item => item.discussionId}/>
        <FooterPlayer />
      </SafeAreaView>
    );
  }
}

PlaylistScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topicHeader: {
    width: '100%',
    height: 300,
  },
});

function mapStateToProps(state) {
  return {
    isRequestingTopic: state.topicState.isRequestingTopic,
    playlist: state.topicState.topicPlaylist,
    topic: state.topicState.topic,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPlaylist: (playlist) => dispatch(setCurrentTopic(playlist)),
    getTopic: (topicId) => dispatch(fetchTopic(topicId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistScreen);
