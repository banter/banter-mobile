import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Container} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#f76c57',
    },
  };


  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
  }


  render() {
    return (
      <Container>
        <Text style={styles.title}>Second level</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#0f293b',
    height: '100%',
    padding: 30,
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
