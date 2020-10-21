/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTrackPlayerProgress} from 'react-native-track-player';
import {StyleSheet, View} from 'react-native';
import {Text, Col, Grid, Row} from 'native-base';
import { FONT_SIZE_SMALL } from '../../styles/typography';
import { WHITE, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, TRANSPARENT } from '../../styles/colors';
import { Typography } from '../../styles';

export default function ProgressBar() {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.container}>
      <Grid>
        <Row
          style={{
          height: 30,
        }}>
          <Col style={styles.progress}>
            <View
              style={{
              flex: progress.position,
              ...styles.listenedStyle,
            }}/>
            <View
              style={{
              flex: progress.duration - progress.position,
              ...styles.remainingStyle,
            }}/>
          </Col>
          <Col style={{
            width: 20,
          }}>
            <Text style={styles.buttonText}>1X</Text>
          </Col>
        </Row>
        <Row style={{
          height: 20,
        }}>
          <Col>
            <Text style={styles.startTimeText}>0:00</Text>
          </Col>
          <Col>
            <Text style={styles.endTimeText}>10:00</Text>
          </Col>

        </Row>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: TRANSPARENT,
    flexDirection: 'row',
  },
  progress: {
    width: '90%',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  startTimeText: {
    textAlign:'left',
    fontSize: FONT_SIZE_SMALL,
    color: GRAY_MEDIUM,
  },
  endTimeText: {
    textAlign: 'right',
    fontSize: FONT_SIZE_SMALL,
    color: GRAY_MEDIUM,
  },

  buttonText: {
    ...Typography.descriptionText,
  },

  listenedStyle: {
      backgroundColor: WHITE,
      height: 10,
  },

  remainingStyle: {
    backgroundColor: GRAY_MEDIUM,
    height: 10,
},
});
