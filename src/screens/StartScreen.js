import * as React from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      genres: [],
      selected: null,
    };
  }
  _onPressButton() {
    alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>
                  <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
      </View>
    );
  }
}

StartScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
