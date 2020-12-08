import React from 'react';
import {StyleSheet} from 'react-native';
import {Root, Text, Toast} from 'native-base';
export default class LoginScreen extends React.Component {
  render() {
    return (
      <Root>
        <Text style={styles.title}>Second level</Text>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    marginTop: 50,
    fontFamily: 'Verdana',
    fontSize: 40,
    color: 'white',
  },
  subtitle: {
    marginTop: 10,
    fontFamily: 'Verdana',
    fontSize: 20,
    color: 'white',
  },
  params: {
    marginBottom: 20,
  },
});
