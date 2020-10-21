import React from 'react';
import { DiscussionItem } from '../../models';
import { Grid, Col, Text, View, Container } from 'native-base';
import { LikeButton, ShareButton, PlaybackIcon } from '../atoms';
import { StyleSheet, SafeAreaView } from 'react-native';
import CollapsedAudioPlayer from '../organisms/CollapsedAudioPlayer';
import ControlButtonActionBar from './ControlButtonActionBar';



export default function AudioPlayerActionBar(props){

    // const discussion = new DiscussionItem(props.discussion);
    const AudioService = props.service;
    const isPlaying = props.playing;

    return (
        <View style={styles.container}>
        <Grid>
        <Col style={styles.colStyleLeft}>
            <LikeButton />
        </Col>
        <Col
        style={styles.wideColStyle}>
          <ControlButtonActionBar service={AudioService} playing={isPlaying} />
        </Col>
        <Col style={styles.colStyleRight}>
            <ShareButton />
        </Col>
      </Grid>
      </View>
    );
}

AudioPlayerActionBar.propTypes = {
};

AudioPlayerActionBar.defaultProps = {
};

const COL_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  colStyleLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor:'#00CE9F',
    height: COL_HEIGHT,
  },
  colStyleRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor:'#00CE9F',
    height: COL_HEIGHT,
  },
  wideColStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#00CE9F',
    height: COL_HEIGHT,
    width: '70%',
  },
});
