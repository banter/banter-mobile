import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import OauthButtons from '../commons/oauth/OauthButtons';
import SoundAnimation from '../commons/animations/SoundAnimation';

export default class LandingScreen extends React.Component {
  render() {
      return (
        <View style={styles.container}>
            <Image
            style={{width: 300, height: 70,  margin: 15}}
            source={require('../assets/Banter_header.png')}
          />
                  <Text style={styles.sloganText}>
          The New Way to
            Listen to Sports Talk
          </Text>
          <SoundAnimation />
          <OauthButtons navigation={this.props.navigation}/>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sloganText: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
  },

});
