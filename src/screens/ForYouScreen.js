/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {WINDOW_WIDTH, percentageOfScreenHeight} from '../styles/mixins';
import {DiscussionCard} from '../components/molecules';
import MOCKDISCUSSIONS from '../../constants/mock-discussions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {FONT_SIZE_24, FONT_SIZE_16} from '../styles/typography';
import {BLACK, TRANSPARENT} from '../styles/colors';
import MOCKPLAYLIST from '../../constants/mock-playlist';
import {DiscussionPlaylist, ExpandedAudioPlayer, FooterPlayer} from '../components/organisms';
import SwipeUpDown from '../components/organisms/SwipeUpDown';
import {connect} from 'react-redux';
import {Spinner} from 'native-base';

const FOR_YOU_INDEX = 0;
const FOLLOWING_INDEX = 1;

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

  _renderItem({item, index}) {
    // Render item is called for both For You and Follow you when Swiping
    let discussionPlaylist = index == FOR_YOU_INDEX
      ? this.props.playlist
      : MOCKPLAYLIST;
    return (
      <View style={styles.slide1}>
        <DiscussionPlaylist playlist={discussionPlaylist}/>
      </View>
    );
  }

  render() {
    const {playlist, isForYouLoading} = this.props;
    let body;
    if (isForYouLoading) {
      body = <Spinner color="white"/>;
    } else {
      body = <View
        style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <Carousel
          layout={'default'}
          ref={ref => this.carousel = ref}
          data={this.state.carouselItems}
          sliderWidth={WINDOW_WIDTH}
          itemWidth={WINDOW_WIDTH}
          windowSize={WINDOW_WIDTH}
          renderItem={this
          ._renderItem
          .bind(this)}
          onSnapToItem=
          { index => this.setState({activeIndex:index}) }/>
      </View>;
    }
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: BLACK,
      }}>
        <View
          style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <TouchableOpacity onPress={() => this.carousel.snapToPrev()}>
            <Text
              style={[(this.state.activeIndex == FOR_YOU_INDEX)
                ? styles.headerText
                : styles.headerTextNonSelected]}>For You</Text>
          </TouchableOpacity>
          <Text style={styles.headerTextNonSelected}>
            |
          </Text>
          <TouchableOpacity onPress={() => this.carousel.snapToNext()}>
            <Text
              style={[(this.state.activeIndex == FOLLOWING_INDEX)
                ? styles.headerText
                : styles.headerTextNonSelected]}>Following</Text>
          </TouchableOpacity>
        </View>
        {body}
        <FooterPlayer/>
      </SafeAreaView>
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
});

function mapStateToProps(state) {
  return {playlist: state.userDataState.forYou.playlist, isForYouLoading: state.userDataState.isForYouLoading};
}

export default connect(mapStateToProps)(ForYouScreen);
