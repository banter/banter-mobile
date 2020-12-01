import React, {useState} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Text, Spinner } from 'native-base';
import TrackPlayer, { useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING, STATE_BUFFERING, STATE_READY } from 'react-native-track-player';

import AudioService from '../../../services/AudioService.js';
import { largeIconStyle } from '../../styles/icons.js';

// TODO WHY IS watchedEvents and useTrackPlayerEvents Necessary? its not being used?

const watchedEvents = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
];



// export default function PlaybackIcon(props) {
//   const { discussion } = props;
//   const [playerState, setPlayerState] = useState(null);
//   const [currentTrack, setCurrentTrack] = useState('');

//   useTrackPlayerEvents(watchedEvents, async (event) => {
//     switch (event.type) {
//       case TrackPlayerEvents.PLAYBACK_ERROR:
//         console.warn('An error occured while playing the current track.');
//         break;
//       case TrackPlayerEvents.PLAYBACK_STATE:
//         setPlayerState(event.state);
//         break;
//       case TrackPlayerEvents.PLAYBACK_TRACK_CHANGED:
//         const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
//         setCurrentTrack(playingTrack);
//         break;
//       default:
//         break;
//     }
//   });

//   const playingThisDiscussion = currentTrack?.id === discussion.discussionId;

//   const audioPlaying = [STATE_PLAYING, STATE_READY].includes(playerState);
//   const audioBuffering = [STATE_BUFFERING].includes(playerState);

//   const isPlaying = playingThisDiscussion && audioPlaying;

//   return (
//     <Pressable onPress={playingThisDiscussion ? AudioService.togglePlayback : () => AudioService.startNewTrack(discussion)}>
//       <Text>
//         {audioBuffering && playingThisDiscussion
//         ? <Spinner color="white"/>
//         :
//         <Icon
//           style={styles.icon}
//           name={isPlaying ? 'pause' : 'play'} />
//         }
//       </Text>
//     </Pressable>
//   );
// }

export default class PlaybackIcon extends React.PureComponent {
  constructor(props) {
    super(props);
    this.discussion = this.props.discussion;
    this.playerState = null;
    this.currentTrack = '';
  }


  render() {
    const playingThisDiscussion = this.currentTrack?.id === this.discussion.discussionId;

    const audioPlaying = [STATE_PLAYING, STATE_READY].includes(this.playerState);
    const audioBuffering = [STATE_BUFFERING].includes(this.playerState);

    const isPlaying = playingThisDiscussion && audioPlaying;
    console.log('PLAYBACK!');
    console.log(this.discussion);
    return (
        <Pressable onPress={playingThisDiscussion ? AudioService.togglePlayback : () => AudioService.startNewTrack(this.discussion)}>
          <Text>
            {audioBuffering && playingThisDiscussion
            ? <Spinner color="white"/>
            :
            <Icon
              style={styles.icon}
              name={isPlaying ? 'pause' : 'play'} />
            }
          </Text>
        </Pressable>
    );
  }
}

PlaybackIcon.propTypes = {
  discussion: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    ...largeIconStyle,
  },
});
