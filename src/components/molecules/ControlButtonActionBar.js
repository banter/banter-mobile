import React from 'react';
import { DiscussionItem } from '../../models';
import { Grid, Col, Text, View, Container } from 'native-base';
import { LikeButton, ShareButton, PlaybackIcon, ControlButton } from '../atoms';
import { StyleSheet, SafeAreaView } from 'react-native';



export default function ControlButtonActionBar(props){

    const AudioService = props.service;
    const isPlaying = props.playing;

    return (
        <View style={styles.controls}>
          <ControlButton icon={'play-skip-back-outline'} onPress={AudioService.skipToPrevious} />
          <ControlButton style={styles.backTime} icon={'refresh'} onPress={AudioService.jumpBack} />
          <ControlButton style={styles.largeIcon} icon={isPlaying ? 'pause-outline' : 'play-outline'} onPress={AudioService.togglePlayback} />
          <ControlButton icon={'refresh'} onPress={AudioService.jumpAhead} />
          <ControlButton icon={'play-skip-forward-outline'} onPress={AudioService.skipToNext} />
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
        shadowOffset: { width: 0, height: 1 },
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
        transform: [{rotateY: '180deg'}],
      },
});
