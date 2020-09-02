import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Animated} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {
  Text,
  Content,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Left,
  Icon,
  Container,
  Button,
  Fab,
} from 'native-base';

import PlayListItem from '../models/PlaylistItem';

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
            (playlistItem) =>
              new PlayListItem({
                name: playlistItem.description,
                uri: playlistItem.episodePlaybackUrl,
                discussionId: playlistItem.discussionId,
                startTime: playlistItem.startTimeMillis,
                endTime: playlistItem.endTimeMillis,
                thumbnailUrl: playlistItem.podcastThumbnailUrl,
                podcastTitle: playlistItem.podcastTitle,
              }),
          ),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async playAudio({id, title, artist, url, artwork, startTime}) {
    const currentlyPlaying = {id, url, title, artist, artwork};
    // Creates the player
    TrackPlayer.setupPlayer().then(async () => {
      // Adds a track to the queue
      await TrackPlayer.add(currentlyPlaying);
      this.setState({currentlyPlaying});
      // Starts playing it
      TrackPlayer.play();
    });
  }

  async pauseAudio() {
    await TrackPlayer.pause();
  }

  render() {
    const {topic, currentlyPlaying} = this.state;
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
            {this.state.playlist.map((playlistItem) => {
              return (
                <Card key={`discussion-${playlistItem.discussionId}-key`}>
                  <CardItem thumbnail>
                    <Left>
                      <Thumbnail source={{uri: playlistItem.thumbnailUrl}} />
                      <Body>
                        <Text>{playlistItem.podcastTitle}</Text>
                      </Body>
                      {currentlyPlaying.id !== playlistItem.discussionId ? (
                        <Icon
                          onPress={() => {
                            this.playAudio({
                              id: playlistItem.discussionId,
                              title: playlistItem.name,
                              artist: playlistItem.podcastTitle,
                              url: playlistItem.uri,
                              artwork: playlistItem.thumbnailUrl,
                            });
                          }}
                          name="play"
                        />
                      ) : (
                        <Icon onPress={this.pauseAudio} name="pause" />
                      )}
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Text>{playlistItem.name}</Text>
                    </Left>
                  </CardItem>
                </Card>
              );
            })}
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
