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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      genres: [],
      selected: null,
    };
  }

  componentDidMount() {
    return fetch(
      'https://api.banteraudio.com/v1/topics/trending/?sinceDaysAgo=3&limit=15',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          genres: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <Content>
            <Spinner color="black" />
          </Content>
        </View>
      );
    }

    const {selected} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <List>
            {/* Vue --- for-each  */}
            {this.state.genres.map((genre) => {
              return (
                <ListItem
                  selected={selected === genre.tag.id}
                  onPressIn={() => {
                    this.setState({selected: genre.tag.id});
                  }}
                  onPressOut={() =>
                    navigation.navigate('Playlist', {
                      topic: genre.tag,
                    })
                  }
                  thumbnail
                  key={`genre-${genre.tag.id}-key`}
                  style={[
                    styles.codeHighlightContainer,
                    styles.homeScreenFilename,
                  ]}>
                  <Left>
                    <Thumbnail square source={{uri: genre.tag.imageUrl}} />
                  </Left>
                  <Body>
                    <Text>{genre.tag.value}</Text>
                  </Body>
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
