/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {WINDOW_WIDTH} from '../styles/mixins';
import {DiscussionCard} from '../components/molecules';
import MOCKDISCUSSIONS from '../../constants/mock-discussions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { FONT_SIZE_24, FONT_SIZE_16 } from '../styles/typography';
import { BLACK, TRANSPARENT } from '../styles/colors';

export default class ForYouScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        }, {
          title: 'Item 2',
          text: 'Text 2',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.slide1}>
        <ScrollView>
          <DiscussionCard discussion={MOCKDISCUSSIONS}/>
          <DiscussionCard discussion={MOCKDISCUSSIONS}/>
        </ScrollView>

      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
        flex: 1,
        backgroundColor: BLACK,
      }}>
        <View
          style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <TouchableOpacity onPress={() => this.carousel.snapToNext()}>
            <Text style={[(this.state.activeIndex == 0) ? styles.headerText : styles.headerTextNonSelected]}>For You</Text>
          </TouchableOpacity>
          <Text style={styles.headerTextNonSelected}> | </Text>
          <TouchableOpacity onPress={() => this.carousel.snapToPrev()}>
          <Text style={[(this.state.activeIndex == 1) ? styles.headerText : styles.headerTextNonSelected]}>Following</Text>
          </TouchableOpacity>
        </View>
        <View
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
            renderItem={this._renderItem}
            onSnapToItem=
            { index => this.setState({activeIndex:index}) }/>
        </View>
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
    opacity:0.2,
  },
});
