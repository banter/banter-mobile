import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {TagButton} from '../atoms';
import {Content, Text} from 'native-base';
import {DiscussionCard} from '../molecules';
import MOCKPLAYLIST from '../../../constants/mock-playlist';
import {percentageOfScreenHeight} from '../../styles/mixins';
import Carousel from 'react-native-snap-carousel';
import {BLACK} from '../../styles/colors';

export default class DiscussionPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.playlist = this.props.playlist;
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.slide1}>
        <DiscussionCard key={`card-${item.discussionId}`} playlistType={'FOR_YOU'} discussion={item}/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          layout={'default'}
          ref={ref => this.carousel = ref}
          data={this.playlist}
          sliderHeight={percentageOfScreenHeight(0.7)}
          itemHeight={percentageOfScreenHeight(0.7)}
          renderItem={this._renderItem}
          vertical={true}/>
      </View>
    );
  }

}

DiscussionPlaylist.propTypes = {
  playlist: PropTypes.array,
};

DiscussionPlaylist.defaultProps = {
  playlist: MOCKPLAYLIST,
};

const styles = StyleSheet.create({
  container: {
  },
  wrapper: {},
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK,
  },
});
