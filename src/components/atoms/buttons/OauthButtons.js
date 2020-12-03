
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { FacebookSocialButton, GoogleSocialButton, TwitterSocialButton } from 'react-native-social-buttons';
import { useNavigation } from '@react-navigation/native';


export default class OauthButtons extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        isButtonSelected: false,
        buttonText: '',
      };
    }
    render (){
      const {navigation} = this.props;
      if (!this.state.isButtonSelected) {
        return (
          <View>
      <View style={{marginTop:40, marginBottom:15}} >
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
      }
      return (
        <View>
          <View style={{marginTop:30, marginBottom:5}} >
          <FacebookSocialButton
                    onPress={() =>
                      navigation.navigate('Onboarding')
                    }
            buttonText={this.state.buttonText + ' with Facebook'}/>
                             </View>

                             <View style={styles.oauthButton}>
          <GoogleSocialButton
                    onPress={() =>
                      navigation.navigate('Onboarding')
                    }
                    buttonText={this.state.buttonText + ' with Google'} />
                    </View>
                    <View style={styles.oauthButton} >

                    <TwitterSocialButton
                    onPress={() =>
                      navigation.navigate('Onboarding')
                    }
                    buttonText={this.state.buttonText + ' with Twitter'}/>
                    </View>
                    <View style={styles.oauthButton} >
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
  onboardingButton: {
    margin: 15,
    padding: 15,
  },
  sloganText: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
  },

});
