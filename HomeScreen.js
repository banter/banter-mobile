import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import CardImageExample from './commons/logos/BanterHeader';
import LottieView from 'lottie-react-native';

class HomeScreen extends React.Component {
  componentDidMount() {
    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(1, 20);
  }
  render() {
    return (
      <View style={styles.container}>
                <Image
          style={{width: 300, height: 60}}
          source={require('./assets/Banter_logo_white.png')}
        />
              <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./assets/sound-wave.json')}
      />
        <Text style={styles.sloganText}>
        The New Way to
Listen to Sports Talk
        </Text>
        <Image
          style={{width: 300, height: 200}}
          source={require('./assets/radio.png')}
        />
        <Button
          title="Sign Up"
          onPress={() =>
            this.props.navigation.navigate('Root')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  sloganText: {
    fontWeight: 'bold',
    color: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
