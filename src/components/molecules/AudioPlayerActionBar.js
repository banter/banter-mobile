import React from 'react';
import { DiscussionItem } from '../../models';
import { Grid, Col, Text, View, Container } from 'native-base';
import { LikeButton, ShareButton, PlaybackIcon } from '../atoms';
import { StyleSheet, SafeAreaView } from 'react-native';



export default function AudioPlayerActionBar(props){

    const discussion = new DiscussionItem(props.discussion);

    return (
        <View style={styles.container}>
        <Grid>
        <Col style={styles.colStyleLeft}>
            <LikeButton discussion={discussion} />
        </Col>
        <Col
        style={styles.wideColStyle}>
            <PlaybackIcon discussion={discussion} />
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
    width: '50%',
  },
});
