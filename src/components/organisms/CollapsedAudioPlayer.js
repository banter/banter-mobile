import React from 'react';
import {DiscussionItem} from '../../models';
import {Grid, Col, Text, View, Container} from 'native-base';
import {LikeButton, ShareButton, PlaybackIcon, ControlButton, ProgressBar} from '../atoms';
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import ControlButtonActionBar from '../molecules/ControlButtonActionBar';

export default function CollapsedAudioPlayer(props) {

  const AudioService = props.service;
  const isPlaying = props.playing;
  const track = props.playingTrack;
  console.log('In Collapsed Audio Player Function');

  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={{
        uri: track.artwork,
      }}/>
      <ProgressBar/>
      <Text style={styles.title}>{track.title}</Text>
      <Text style={styles.artist}>{track.artist}</Text>
      <ControlButtonActionBar service={AudioService} playing={isPlaying}/>
    </View>
  );
}

const COL_HEIGHT = 60;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    shadowOpacity: 0.1,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginTop: 15,
    marginBottom: 30,
    flexDirection: 'row',
  },
  largeIcon: {
    fontSize: 24,
  },
  backTime: {
    transform: [
      {
        rotateY: '180deg',
      },
    ],
  },
});
