
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Animation from 'lottie-react-native';

class SoundAnimation  extends React.Component {
  componentDidMount() {
    this.animation.play(1, 200);
  }
    render() {
      return (
      <View style={styles.animationBox}>
      <Animation
      style={styles.animation}
    ref={animation => {
      this.animation = animation;
    }}
    source={require('../../../assets/sound-wave.json')}
  />
    </View>
    );
  }

  }


const styles = StyleSheet.create({
  animationBox: {
    position: 'relative',
  },
  animation: {
    width: 300,
    height: 100,
    backgroundColor: 'black',
  },
});

export default SoundAnimation;
