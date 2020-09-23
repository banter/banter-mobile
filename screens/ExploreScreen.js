import React from 'react';
import { StyleSheet, View  } from 'react-native';
import { Container, Header,
  Text, Item, Icon, Input,
  ListItem, List, Body, Spinner }
  from 'native-base';
import _ from 'lodash';
import { connect } from 'react-redux';
import { queryTopics } from '../store/actions/topics';

class ExploreScreen extends React.Component {

  componentDidMount() {
    // this.props.dispatch(queryTopics('Lebron'));
  }

  _onChangeSearchText(text){
    if (text.length > 0){
      this.props.dispatch(queryTopics(text));
    }
    else {
      this.clearTopicQuery();
    }

  }
  clearTopicQuery(){
    console.log('AEE');
    this.setState({
      tagMatches: [],
    });
  }

  render() {
    const {
      isRequestingQuery,
      tagMatches,
    } = this.props;
    if (this.isRequestingQuery) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <Container>
            <Spinner color="white" />
          </Container>
        </View>
      );
    }
      return (
        <Container style={{backgroundColor: 'black'}}>
<Header searchBar rounded style={{backgroundColor: 'transparent'}} >
<Item>
            <Icon name="ios-search" />
            <Input placeholder="Search"
            onChangeText= {this._onChangeSearchText.bind(this)} />
          </Item>
</Header>
<List>
{tagMatches.map((tagMatch: any, index: number) => {

              return (
                <ListItem key={index}>
                <Body>
                  <Text style={{color: 'white'}}> {tagMatch.value}</Text>
                </Body>
              </ListItem>
              );
        })}

</List>

<Text>AY</Text>
      </Container>
      );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sloganText: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
  },

});

function mapStateToProps(state) {
  return {tagMatches: state.topicState.tagMatches, isRequestingQuery: state.topicState.isRequestingQuery};
}

export default connect(mapStateToProps)(ExploreScreen);
