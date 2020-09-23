import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Animated} from 'react-native';
import FooterPlayer from '../components/FooterPlayer.js';
import AudioService from '../services/AudioService.js';
import DiscussionCard from '../commons/cards/DiscussionCard';

import {
  Content,
  Icon,
  Container,
  Button,
  Fab,
} from 'native-base';

import DiscussionItem from '../models/DiscussionItem';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentlyPlaying: {},
      playlist: [],
      topic: {},
    };
  }

  componentDidMount() {
    const {topic} = this.props.route.params;
    return fetch(`https://api.banteraudio.com/v1/topics/?id=${topic.id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          topic: responseJson.primaryTag,
          playlist: responseJson.playlist.map(
            playlistItem => new DiscussionItem(playlistItem)
          ),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async togglePlayback(discussionItem) {
    const currentTrack = AudioService.currentTrack();
    if (!currentTrack) {
      await AudioService.startNewTrack(discussionItem);
    } else {
      AudioService.togglePlayback();
    }
  }

  render() {
    const {topic} = this.state;
    return (
      <Container style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Animated.Image
            source={{
              uri: topic.imageUrl,
            }}
            style={styles.topicHeader}
          />
          <Content>
            {
              this.state.playlist
                .map(playlistItem => <DiscussionCard
                  key={`card-${playlistItem.discussionId}`}
                  discussion={playlistItem}/>
                )
            }
          </Content>
          <Fab
            active={this.state.active}
            direction="up"
            style={styles.mainFab}
            position="bottomRight"
            onPress={() => this.setState({active: !this.state.active})}>
            <Icon name="share" />
            <Button style={styles.twitterFab}>
              <Icon name="logo-twitter" />
            </Button>
          </Fab>
        </ScrollView>
        <FooterPlayer
          onNext={AudioService.skipToNext}
          onPrevious={AudioService.skipToPrevious}
          onTogglePlayback={this.togglePlayback}
        />
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainFab: {
    backgroundColor: '#5067FF',
  },
  twitterFab: {
    backgroundColor: '#1DA2F2',
  },
  topicHeader: {
    width: '100%',
    height: 300,
  },
});
