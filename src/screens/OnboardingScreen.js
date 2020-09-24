import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Button,
  Text, Item, Icon, Input,
  ListItem, Grid, Col, List, TouchableOpacity }
  from 'native-base';
import MOCKTEAMS from '../../constants/mock-teams';
import _ from 'lodash';
import { TeamSelectionScroll } from '../components/organisms';

const teams = MOCKTEAMS;

export default class OnboardingScreen extends React.Component {

  render() {

      return (
        <Container>

<Header searchBar rounded style={{backgroundColor: 'lightgray'}} >
<Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
</Header>
        <Grid>
          <Col style={{ backgroundColor: 'lightgray', width:100 }}>
          <List>
            <ListItem
                    onPress={() =>
                      alert('Following this thing')
                    }>
            {/* <TouchableOpacity> */}
            <Text>NFL</Text>
            {/* </TouchableOpacity> */}
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
          <Col>
          <TeamSelectionScroll teams={teams} teamsPerRow={2} />
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
