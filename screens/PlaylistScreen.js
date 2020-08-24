import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, List, ListItem, Left, Right, Icon} from 'native-base';

import PlayListItem from '../models/PlaylistItem';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playlist: [],
      selected: null,
    };
  }

  componentDidMount() {
    const {topic} = this.props.route.params;
    return fetch(`https://api.banteraudio.com/v1/topics/?id=${topic.id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          playlist: responseJson.playlist.map(
            (playlistItem) =>
              new PlayListItem({
                name: playlistItem.description.slice(0, 20),
                uri: playlistItem.episodePlaybackUrl,
                discussionId: playlistItem.discussionId,
                startTime: playlistItem.startTimeMillis,
                endTime: playlistItem.endTimeMillis,
              }),
          ),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async playAudio(uri, startTime) {
    try {
      console.log(playing);
    } catch (error) {
      console.log('Failed!');
      console.log(error);
    }
  }

  render() {
    const {selected} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <List>
            {this.state.playlist.map((playlistItem) => {
              return (
                <ListItem
                  selected={selected === playlistItem.discussionId}
                  onPressIn={() => {
                    this.setState({selected: playlistItem.discussionId});
                  }}
                  onPressOut={() => {
                    this.playAudio(playlistItem.uri, playlistItem.startTime);
                  }}
                  key={`discussion-${playlistItem.discussionId}-key`}
                  style={[
                    styles.codeHighlightContainer,
                    styles.homeScreenFilename,
                  ]}>
                  <Left>
                    <Text>{playlistItem.name}</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              );
            })}
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
    backgroundColor: '#fff',
  },
});
