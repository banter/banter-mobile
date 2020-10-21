import React from 'react';
import {DiscussionItem} from '../../models';
import {Grid, Col, Text, View, Container, Thumbnail} from 'native-base';
import {LikeButton, ShareButton, PlaybackIcon, ControlButton, ProgressBar} from '../atoms';
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import ControlButtonActionBar from '../molecules/ControlButtonActionBar';
import {ImageStyle, IconStyle} from '../../styles';
import { COLLAPSED_AUDIO_PLAYER_HEIGHT } from '../../styles/mixins';
import TextTicker from 'react-native-text-ticker';

// Duration of the marquee text, this way for small/large text, the speed is adjusted
function calcDuration(text) {
  return 120 * text.length;
}


export default function CollapsedAudioPlayer(props) {

  const AudioService = props.service;
  const isPlaying = props.playing;
  const track = props.playingTrack;
  console.log('In Collapsed Audio Player Function');


  return (

    <View style={styles.container}>
    <Grid>
    <Col style={styles.colStyleLeft}>
                      <Thumbnail
                  style={styles.thumbnailStyle}
                  square
                  source={{
                    uri: track.artwork,
                  }}/>
    </Col>
    <Col
    style={styles.wideColStyle}>
              <TextTicker
          style={{ fontSize: 16 }}
          duration={calcDuration(track.title)}
          loop
          bounce
          repeatSpacer={80}
          marqueeDelay={1000}
        >
          {track.title}
        </TextTicker>
    </Col>
    <Col style={styles.colStyleRight}>
    <ControlButton style={styles.largeIcon} icon={isPlaying ? 'pause-outline' : 'play-outline'} onPress={AudioService.togglePlayback} />
    </Col>
  </Grid>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowOpacity: 0.1,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  colStyleLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor:'#00CE9F',
    height: COLLAPSED_AUDIO_PLAYER_HEIGHT,
    width:'20%',
  },
  colStyleRight: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#00CE9F',
    height: COLLAPSED_AUDIO_PLAYER_HEIGHT,
    width:'15%',
  },
  wideColStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#00CE9F',
    height: COLLAPSED_AUDIO_PLAYER_HEIGHT,
    width: '65%',
  },
  cover: {
    width: 40,
    height: 40,
    marginTop: 5,
    backgroundColor: 'grey',
  },
  title: {
    marginTop: 5,
  },
  largeIcon: {
    ...IconStyle.mediumIconStyle,
    color:'black',
  },
  thumbnailStyle: {
  ...ImageStyle.smallThumbnailStyle,
  borderRadius: 0,
  },
});
