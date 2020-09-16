import React from 'react';
import {StyleSheet} from 'react-native';
import DiscussionCard from '../commons/cards/DiscussionCard';
import BottomNavigation from '../commons/footers/BottomNavigation';
import {ScrollView} from 'react-native-gesture-handler';
import MOCKDISCUSSIONS from '../constants/mock-discussions';
import {Container, Footer,Text, Button, FooterTab, Icon} from 'native-base';
export default class ForYouScreen extends React.Component {
  render() {
    return (
      <Container>
<ScrollView style={styles.container}>
          <Text style={styles.headerText}>For You</Text>
          <Text style={styles.descriptionText}>Picking Podcasts is hard. So we did that for you.</Text>
          <DiscussionCard discussion={MOCKDISCUSSIONS}/>
          <DiscussionCard discussion={MOCKDISCUSSIONS}/>
          <DiscussionCard discussion={MOCKDISCUSSIONS}/>
          <DiscussionCard discussion={MOCKDISCUSSIONS}/>
        </ScrollView>
        <BottomNavigation />
      </Container>

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
