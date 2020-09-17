import React from 'react';
import {StyleSheet} from 'react-native';
import DiscussionCard from '../cards/DiscussionCard';
import {ScrollView} from 'react-native-gesture-handler';
import MOCKDISCUSSIONS from '../../constants/mock-discussions';
import {
  Container,
  Footer,
  Text,
  Button,
  FooterTab,
  Icon,
} from 'native-base';

export default class BottomNavigation extends React.Component {
  render() {
    return (
      <Footer style={styles.container}>
        <FooterTab>
          <Button vertical>
            <Icon name="home"/>
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon type="Entypo" name="fingerprint"/>
            <Text>Listen Now</Text>
          </Button>
          <Button vertical active>
            <Icon name="ios-search"/>
            <Text>Explore</Text>
          </Button>
        </FooterTab>
      </Footer>
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
