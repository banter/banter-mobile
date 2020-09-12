
import React from 'react';
import {  StyleSheet, View, TouchableOpacity} from 'react-native';
import { Thumbnail, Container,
    Header, Content, Card,
    CardItem, Body, Text,
    Icon, Grid, Col } from 'native-base';
import MOCKTAGS from '../../constants/mock-tags';
import TagList from '../../containers/TagList';
const tags = MOCKTAGS;

export default class DiscussionCard  extends React.Component {
  constructor(props) {
    super(props);
  }
  onPress (){
      alert('Preses');
  }
    render() {
      return (
      <View style={styles.container}>
          <Card style={styles.discussionCard}>
          <CardItem style={styles.discussionCardItem}>
          <Grid>
          <Col style={{width:90}}>
          <Thumbnail style={styles.thumbnailStyle} square large source={require('../../assets/giants.png')} />
          </Col>
          <Col>
          <Text style={styles.titleText}>93- The SLopp TOppy Delight</Text>
          <Text style={styles.descriptionText}>Call Her Daddy</Text>
          </Col>
          <Col style={{width:20}} >
          <TouchableOpacity onPress={this.onPress}>
          <Icon type="Feather" name="more-vertical" style={{color:'white'}} />
          </TouchableOpacity>
          </Col>
        </Grid>
            </CardItem >
            <CardItem style={styles.discussionCardItem}>
              <Text numberOfLines={2} style={styles.descriptionText}>
                  Report: Kawhi Leonard  tried to recruit Jimmy Buttle to the Clippers before Paul George...
                  Report: Kawhi Leonard  tried to recruit Jimmy Buttle to the Clippers before Paul George...
                  Report: Kawhi Leonard  tried to recruit Jimmy Buttle to the Clippers before Paul George...</Text>
            </CardItem>
            <CardItem style={styles.discussionCardItem}>
              <Icon type="AntDesign" name="tago" style={{color:'white'}} />
              <TagList tags={tags} />
            </CardItem>


            <CardItem style={styles.discussionCardItem}>
              <Grid>
          <Col style={{width:50}}>
          <TouchableOpacity onPress={this.onPress}>
              <Text>
          <Icon type="AntDesign" name="play" style={styles.largeIconStyle} />
          </Text>
          </TouchableOpacity>
          </Col>
          <Col style={styles.dateAndTimeStyle}>
          <Text style={styles.descriptionText}>DATE</Text>
          </Col>
          <Col style={{width:50}}>
          <TouchableOpacity onPress={this.onPress}>
              <Text>
              <Icon type="AntDesign" name="hearto" style={styles.largeIconStyle} />
              </Text>
          </TouchableOpacity>
          </Col>
        </Grid>
            </CardItem>
          </Card>



    </View>
    );
  }

  }

const CARD_COLOR = '#282828';
const CARD_RADIUS = 20;
const LARGE_ICON_SIZE = 42;
const styles = StyleSheet.create({

    dateAndTimeStyle: {
        justifyContent: 'center',
        paddingLeft:10,
    },

    largeIconStyle: {
        fontSize:LARGE_ICON_SIZE,
        color:'white',
    },

    thumbnailStyle: {
        borderRadius:10,
    },
    discussionCard: {
backgroundColor:CARD_COLOR,
alignItems: 'center',
width:'90%',
borderRadius:CARD_RADIUS,
    },
    discussionCardItem: {
        paddingVertical:-5,
        backgroundColor:CARD_COLOR,
        borderRadius:CARD_RADIUS,
        paddingBottom:5,
        paddingTop:8,
            },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      descriptionText: {
        fontSize: 15,
        color: '#AAAAAA',
      },
  container: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonText: {
    textAlign:'center',

  },
});


