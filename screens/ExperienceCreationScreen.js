import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SoundAnimation from '../commons/animations/SoundAnimation';

class ExperienceCreationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
                <Text style={styles.sloganText}>
Creating an experience thats just for you.
          </Text>
          <SoundAnimation />
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
    textAlign:'center',
    fontSize: 28,
    color: 'white',
    marginBottom: 25,
  },
});

export default ExperienceCreationScreen;
