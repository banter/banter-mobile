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
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    const {navigation, topics, isLoading, error} = this.props;
    if (isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <Content>
            <Spinner color="black" />
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
    backgroundColor: '#fff',
  },
});

function mapStateToProps(state) {
  console.log(state);
  return {
    topics: state.topicState.topics,
    error: state.topicState.errorMessage,
    isLoading: state.topicState.isLoading,
  };
}

export default connect(mapStateToProps)(HomeScreen);
