
import React from 'react';
import { StyleSheet, View, Button, Linking } from 'react-native';
import { GoogleSocialButton, TwitterSocialButton } from 'react-native-social-buttons';

export default class OauthButtons extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        isButtonSelected: false,
        buttonText: '',
      };
    }
    render (){
      if (!this.state.isButtonSelected) {
        return (
          <View>
            <Button
              title="Sign Up Free"
              style={styles.onboardingSpacing}
              onPress={() =>
                this.setState({
                  isButtonSelected: true,
                  buttonText: 'Sign up',
                })
              }
            />
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
      }

      return (
        <View>
          <View style={styles.onboardingSpacing} >
            <Button onPress={() =>
              Linking.openURL('https://api.banteraudio.com/oauth2/authorization/spotify?redirect_uri=banteraudio://')
            } title={this.state.buttonText + ' with Spotify'} style={styles.spotifyButton}/>
          </View>
          <View style={styles.oauthButton}>
            <GoogleSocialButton onPress={() =>
              Linking.openURL('https://api.banteraudio.com/oauth2/authorization/google?redirect_uri=banteraudio://')
            } buttonText={this.state.buttonText + ' with Google'} />
          </View>
          <View style={styles.oauthButton} >
            <TwitterSocialButton onPress={() =>
              Linking.openURL('https://api.banteraudio.com/oauth1/authorization/twitter?redirect_uri=banteraudio://')
            } buttonText={this.state.buttonText + ' with Twitter'}/>
          </View>
          <View style={styles.oauthButton}>
            <Button
              title="Back"
              onPress={() =>
                this.setState({
                  isButtonSelected: false,
                  buttonText: 'Log in',
                })
              }
            />
          </View>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  oauthButton: {
    marginTop:5, marginBottom:5,
  },
  // TOODO - make this match
  spotifyButton: {
    padding: 5,
    backgroundColor: 'white',
  },
  onboardingButton: {
    margin: 15,
    padding: 15,
  },
  sloganText: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
  },
  onboardingSpacing: {
    marginTop: 30,
    marginBottom: 5,
  },
});
