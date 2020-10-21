import React from 'react';
import PropTypes from 'prop-types';

import {
  Pressable,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base';

export default function ControlButton({ icon, onPress, style }) {
  return (
    <Pressable style={styles.controlButtonContainer} onPress={onPress}>
      <Icon name={icon} style={{...styles.controlButtonText, ...style}}/>
    </Pressable>
  );
}

ControlButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  controlButtonContainer: {
    // Do we want Flex to be 1 here? that will take the entire size of parent container?
    // flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
