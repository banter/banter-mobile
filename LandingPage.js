import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import CardImageExample from './commons/logos/BanterHeader';
import OauthButtons from './commons/oauth/OauthButtons.js';
import SoundAnimation from './commons/animations/SoundAnimation';
import Animation from 'lottie-react-native';

export default class LandingPage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      isButtonSelected: true,
      buttonText: '',
    };
  }
  render() {
    let body;
    if (!this.state.isButtonSelected) {
      body = <SignUpLogin/>;
    }
    else {
      body = <OauthButtons/>;
    }
      return (
        <View style={styles.container}>
            <Image
            style={{width: 300, height: 70,  margin: 15}}
            source={require('./assets/Banter_header.png')}
          />
                  <Text style={styles.sloganText}>
          The New Way to
            Listen to Sports Talk
          </Text>
          <SoundAnimation />
        {body}
        </View>
      );
  }
}

const SignUpLogin = () => {
  return (
    <View>
    <View style={{marginTop:30, marginBottom:15}} >
    <Button
      title="Sign Up Free"
      onPress={() =>
        this.setState({
          isButtonSelected: true,
          buttonText: 'Sign up',
        })
      }
    />
    </View>
    <Button
                style={styles.onboardingButton}
                color="gray"
          title="Log in"
          onPress={() =>
            this.setState({
              isButtonSelected: true,
              buttonText: 'Log in',
            })
          }
        />
            </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationBox: {
    position: 'relative',
  },
  onboardingButton: {
    margin: 15,
    padding: 15,
  },
  animation: {
    width: 300,
    height: 100,
    backgroundColor: 'black',
  },
  sloganText: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
  },

});
