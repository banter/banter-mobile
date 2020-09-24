import React from 'react';
import { StyleSheet, Image } from 'react-native';

import OauthButtons from '../components/atoms/oauth/OauthButtons';
import ShareExample from '../components/atoms/buttons/ShareButton';
import SoundAnimation from '../components/atoms/animations/SoundAnimation';
import { Text, Button, Container } from 'native-base';


export default class LandingScreen extends React.Component {
  render() {

  const {navigation} = this.props;
  return (
        <Container style={styles.container}>
          <Image
            style={styles.headerImage}
            source={require('../assets/Banter_header.png')}
          />
                  <Text style={styles.sloganText}>
          The New Way to
            Listen to Sports Talk
          </Text>
          <SoundAnimation />
          <ShareExample />
          <OauthButtons navigation={this.props.navigation}/>
          <Button bordered success style={styles.exploreButton}
          onPress={() =>
            navigation.navigate('App')
          }>
            <Text>Explore</Text>
          </Button>
        </Container>
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
  exploreButton: {
    alignItems: 'center',
    margin: 'auto',
    marginTop: 25,
    alignSelf: 'center',
  },
  headerImage: {width: 300, height: 70,  margin: 15},
});
