import React, { useState } from 'react';
import TrackPlayer, {
  useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING,
} from 'react-native-track-player';
import {
  View,
} from 'react-native';
import AudioService from '../../../services/AudioService';
import CollapsedAudioPlayer from './CollapsedAudioPlayer';
import ExpandedAudioPlayer from './ExpandedAudioPlayer';
import SwipeUpDown from './SwipeUpDown';
import store from '../../../store';
import { hideNavBar, showNavBar } from '../../../store/actions/appStyle';
import { COLLAPSED_AUDIO_PLAYER_HEIGHT } from '../../styles/mixins';

const watchedEvents = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
];

function collapseNavBar(){
  console.log('collapseNavBar');
  store.dispatch(hideNavBar());
}

function displayNavBar(){
  console.log('displayNavBar');
  store.dispatch(showNavBar());
}

export default function FooterPlayer(props) {
  const [track, setTrack] = useState('');
  const [playerState, setPlayerState] = useState(null);

  useTrackPlayerEvents(watchedEvents, async (event) => {
    switch (event.type) {
      case TrackPlayerEvents.PLAYBACK_ERROR:
        console.warn('An error occured while playing the current track.');
        break;
      case TrackPlayerEvents.PLAYBACK_STATE:
        setPlayerState(event.state);
        break;
      case TrackPlayerEvents.PLAYBACK_TRACK_CHANGED:
        const currentTrack = await TrackPlayer.getTrack(event.nextTrack);
        setTrack(currentTrack);
        break;
      default:
        break;
    }
  });


  const isPlaying = playerState === STATE_PLAYING;
  console.log('In Footer Player Function');
  return (
    <View>
      {track ?
      <SwipeUpDown
        itemMini={<CollapsedAudioPlayer service={AudioService} playing={isPlaying} playingTrack={track} />}
         itemFull={<ExpandedAudioPlayer service={AudioService} playing={isPlaying} playingTrack={track} />} // Pass props component when show full
         onShowMini={displayNavBar}
         onShowFull={collapseNavBar}
         onMoveDown={() => console.log('down')}
         swipeHeight={COLLAPSED_AUDIO_PLAYER_HEIGHT}
         onMoveUp={() => console.log('up')}
         disablePressToShow={true} // Press item mini to show full
       />
       : null}
    </View>
  );
}
