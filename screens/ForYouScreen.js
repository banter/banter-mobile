import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import DiscussionCard from '../commons/cards/DiscussionCard';

export default class ForYouScreen extends React.Component {
  render() {
      return (
        <View style={styles.container}>
            <Image
            style={{width: 300, height: 70,  margin: 15}}
            source={require('../assets/Banter_header.png')}
          />
          <DiscussionCard name="A"/>
          <DiscussionCard name="A"/>
        </View>

      );
  }
}


const styles = StyleSheet.create({
});
