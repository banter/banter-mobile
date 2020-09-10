import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Button, Text, Item, Icon, Input, ListItem, Grid, Col, List } from 'native-base';
import SoundAnimation from '../commons/animations/SoundAnimation';
import MOCKTEAMS from '../constants/mock-teams';
import TeamSelectionScroll from '../containers/TeamSelectionScroll';
import _ from 'lodash';

const teams = MOCKTEAMS;

export default class OnboardingScreen extends React.Component {

  groupedArticles() {
    return _.chunk(this.getLeagues, 3);
  }

  render() {

      return (
        <Container>

<Header searchBar rounded >
<Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
<Button title="Sign Up Free" />
</Header>
{/* <TeamSelectionScroll /> */}


        <Grid>
          <Col style={{ backgroundColor: '#635DB7', width:100 }}>
          <List>
            <ListItem>
              <Text>NFL</Text>
            </ListItem>
            <ListItem>
              <Text>MLB</Text>
            </ListItem>
            <ListItem>
              <Text>NHL</Text>
            </ListItem>
            <ListItem>
              <Text>NBA</Text>
            </ListItem>
          </List>
          </Col>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }} >
          <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
          </Col>
        </Grid>
      </Container>
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
    color: 'white',
    marginBottom: 25,
  },

});
