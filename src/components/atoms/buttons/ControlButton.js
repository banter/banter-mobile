import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
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
