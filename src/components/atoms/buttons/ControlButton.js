import React from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base';

export default function ControlButton({ icon, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Icon name={icon} style={styles.controlButtonText}/>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
