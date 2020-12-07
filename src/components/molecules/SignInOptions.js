import React from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet, SafeAreaView, Linking } from 'react-native';

export default function SignInOptions(props){
    return (
      <SafeAreaView
        style={styles.buttonList}>
        <Button rounded small light onPress={ ()=>{ Linking.openURL('https://api.banteraudio.com/oauth1/authorization/twitter?redirect_uri=banteraudio://');}} >
          <Text>Sign In To Twitter</Text>
        </Button>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  buttonList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

