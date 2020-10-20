import React from 'react';
import { DiscussionItem } from '../../models';
import { Grid, Col, Text, View, Container } from 'native-base';
import { LikeButton, ShareButton, PlaybackIcon, ControlButton } from '../atoms';
import { StyleSheet, SafeAreaView } from 'react-native';
import { smallIconStyle, mediumIconStyle, largeIconStyle } from '../../styles/icons';



export default function ControlButtonActionBar(props){

    const AudioService = props.service;
    const isPlaying = props.playing;

    return (
        <View style={styles.controls}>
          <ControlButton style={styles.smallIconStyle} icon={'play-skip-back-outline'} onPress={AudioService.skipToPrevious} />
          <ControlButton style={styles.backTime}  icon={'refresh'} onPress={AudioService.jumpBack} />
          <ControlButton style={styles.largeIconStyle} icon={isPlaying ? 'pause-outline' : 'play-outline'} onPress={AudioService.togglePlayback} />
          <ControlButton style={styles.smallIconStyle} icon={'refresh'} onPress={AudioService.jumpAhead} />
          <ControlButton style={styles.smallIconStyle} icon={'play-skip-forward-outline'} onPress={AudioService.skipToNext} />
        </View>
    );
}

const COL_HEIGHT = 60;

const BUTTON_PADDING = 12;
const styles = StyleSheet.create({
      controls: {
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
      },
      mediumIconStyle: {
        ...mediumIconStyle,
      },
      largeIconStyle: {
        ...largeIconStyle,
        paddingLeft: BUTTON_PADDING,
        paddingRight: BUTTON_PADDING,
      },
      smallIconStyle: {
        ...smallIconStyle,
        paddingLeft: BUTTON_PADDING,
        paddingRight: BUTTON_PADDING,
      },
      backTime: {
        ...smallIconStyle,
        transform: [{rotateY: '180deg'}],
        paddingLeft: BUTTON_PADDING,
        paddingRight: BUTTON_PADDING,
      },
});
