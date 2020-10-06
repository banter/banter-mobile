import * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { setCurrentTopic } from '../../store/actions/topics';

import {
  Content,
  Container,
  Spinner,
} from 'native-base';
import {DiscussionItem} from '../models';
import {DiscussionCard} from '../components/molecules';
import TopicHeaderCard from '../components/organisms/TopicHeaderCard';

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

    return fetch(`https://api.banteraudio.com/v1/topics/?id=${topic.id}`).then((response) => response.json()).then((responseJson) => {
      this.setState({
        isLoading: false,
        topic: responseJson.primaryTag,
      });
      setPlaylist(responseJson.playlist.map(playlistItem => new DiscussionItem(playlistItem)));
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    const {topic} = this.state;
    const {playlist} = this.props;
    if (this.isLoading) {
      return (
        <SafeAreaView>
          <Content>
            <Spinner color="white"/>
          </Content>
        </SafeAreaView>
      );
    }
    return (
      <Container style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <TopicHeaderCard topic={topic}/>
            <Content>
              {
                playlist?.map(playlistItem => <DiscussionCard
                  key={`card-${playlistItem.discussionId}`}
                  discussion={playlistItem}/>)
              }
            </Content>
        </ScrollView>
      </Container>
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
