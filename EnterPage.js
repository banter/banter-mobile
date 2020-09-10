import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import CardImageExample from './commons/logos/BanterHeader';
import { FacebookSocialButton, GoogleSocialButton, TwitterSocialButton } from 'react-native-social-buttons';

class EnterPage extends React.Component {
  render() {
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
        <View style={{marginTop:5, marginBottom:5}} >
        <FacebookSocialButton
          onPress={() =>
            alert('AYOO')
          }
          buttonText="Sign up with Facebook"
                   />
                           </View>

                           <View style={{marginTop:5, marginBottom:5}} >
        <GoogleSocialButton
                  onPress={() =>
                    alert('AYOO')
                  }
                  buttonText="Sign up with Google" />
                  </View>
                  <View style={{marginTop:5, marginBottom:5}} >

                  <TwitterSocialButton
                  onPress={() =>
                    alert('AYOO')
                  }
                  buttonText="Sign up with Twitter"/>
                  </View>
                  <View style={{marginTop:5, marginBottom:5}} >
                  <Button
          title="Back"
          onPress={() =>
            this.props.navigation.navigate('Landing')
          }
        />
</View>
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

}); export default EnterPage;
