import * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentTopic } from '../../store/actions/topics';

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
    this.state = {
      isLoading: true,
      currentlyPlaying: {},
      topic: {},
    };
  }

  componentDidMount() {
    const {topic} = this.props.route.params;
    const {setPlaylist} = this.props;

    // TODO: Move this to an action.
    return fetch(`https://api.banteraudio.com/v1/topics/?id=${topic.id}`).then((response) => response.json()).then((responseJson) => {
      console.log('Got Responseee', responseJson);
      this.setState({
        isLoading: false,
        topic: responseJson.primaryTag,
      });
      // console.log('Before setPlaylist');
      setPlaylist(responseJson.playlist.map(playlistItem => playlistItem));
      // console.log('After setPlaylist');
    }).catch((error) => {
      console.error(error);
    });

  }

  renderHeader = (topic) => {
    return <TopicHeaderCard topic={topic}/>;
  };

  render() {
    const {topic} = this.state;
    const {playlist} = this.props;
    if (this.state.isLoading) {
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
    playlist: state.topicState.topicPlaylist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPlaylist: (playlist) => dispatch(setCurrentTopic(playlist)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistScreen);
