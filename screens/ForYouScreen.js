import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import DiscussionCard from '../commons/cards/DiscussionCard';
import {ScrollView} from 'react-native-gesture-handler';
import MOCKDISCUSSIONS from '../constants/mock-discussions';
export default class ForYouScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>For You</Text>
        <Text style={styles.descriptionText}>Picking Podcasts is hard. So we did that for you.</Text>
        <DiscussionCard discussion={MOCKDISCUSSIONS}/>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgray',
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  headerText: {
    fontSize: 46,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
