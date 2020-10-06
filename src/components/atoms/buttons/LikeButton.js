import React from 'react';
import PropTypes from 'prop-types';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Icon } from 'native-base';
import { largeIconStyle, smallIconStyle } from '../../../styles/icons';

export default function LikeButton({discussion, size}) {
  return (

    <TouchableOpacity>
      <Text>
        <Icon name="heart" style={[(size == 'small') ? styles.smallIconStyle : styles.largeIconStyle]}/>
      </Text>
    </TouchableOpacity>
  );
}

LikeButton.propTypes = {
  discussion: PropTypes.object.isRequired,
  size: PropTypes.string,
};

LikeButton.defaultProps = {
    size: 'large',
  };

const styles = StyleSheet.create({
  controlButtonContainer: {
    flex: 1,
  },
  largeIconStyle: {
    ...largeIconStyle,
  },
  smallIconStyle: {
    ...smallIconStyle,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
