/* eslint-disable react-native/no-inline-styles */
import TrackPlayer, {
  useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING,
} from 'react-native-track-player';
import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {WINDOW_WIDTH, percentageOfScreenHeight} from '../styles/mixins';
import {DiscussionCard} from '../components/molecules';
import MOCKDISCUSSIONS from '../../constants/mock-discussions';
import {ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler';
import {FONT_SIZE_24, FONT_SIZE_16} from '../styles/typography';
import {BLACK, TRANSPARENT} from '../styles/colors';
import MOCKPLAYLIST from '../../constants/mock-playlist';
import {DiscussionPlaylist, ExpandedAudioPlayer, FooterPlayer} from '../components/organisms';
import SwipeUpDown from '../components/organisms/SwipeUpDown';
import {connect} from 'react-redux';
import {Spinner, Footer, FooterTab, Button, Container, Header, Content} from 'native-base';
import BottomNavBar from '../navigation/BottomNavBar';
import store from '../../store';
import { hideNavBar, showNavBar } from '../../store/actions/appStyle';


const watchedEvents = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
];


class ForYouScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'For You',
        }, {
          title: 'Following',
        },
      ],
    };
  }

  collapseNavBar(){
    console.log('hide');
    store.dispatch(hideNavBar());
  }

  displayNavBar(){
    console.log('show');
    store.dispatch(showNavBar());
  }

  render() {

    return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
    }}>
{/* <Text onPress={() => this.swipeUpDownRef.showFull()}>Show</Text>
<SwipeUpDown
itemMini={<Text>A{this.props.isNavBarDisplayed} B</Text>} // Pass props component when show full
 	itemFull={<Text>FULL</Text>} // Pass props component when show full
 	onShowMini={this.displayNavBar}
 	onShowFull={this.collapseNavBar}
   onMoveDown={() => console.log('down')}
   swipeHeight={120}
 	onMoveUp={() => console.log('up')}
 	disablePressToShow={false} // Press item mini to show full
 /> */}
<FooterPlayer />
        </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  headerText: {
    fontSize: FONT_SIZE_24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  headerTextNonSelected: {
    fontSize: FONT_SIZE_24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    opacity: 0.4,
  },
  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'white',
  },
  footer: {
    // position: 'absolute',
    flex:6,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'red',
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
});

function mapStateToProps(state) {
  return {isNavBarDisplayed: state.appStyleState.isNavBarDisplayed};
}

export default connect(mapStateToProps)(ForYouScreen);
