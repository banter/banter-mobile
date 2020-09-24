import React from 'react';
import {Icon, Thumbnail, Text, Button} from 'native-base';
import {StyleSheet, View, Image} from 'react-native';
import Animation from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
export default class FollowButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let button;
    if (this.props.isIconButton) {
      button = <TouchableOpacity onPress={() => alert('Following this thing')}>
        <Thumbnail large source={require('../../../assets/giants.png')}/>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>;
    } else {
      button = <Button rounded bordered small >
        <Text>{this.props.text}</Text>
      </Button>;
    }

    return (
      <View style={styles.container}>
        {button}
      </View>
    );
  }

}

FollowButton.propTypes = {
  text: PropTypes.string,
  isIconButton: PropTypes.bool,
};

FollowButton.defaultProps = {
  text: 'Follow',
  isIconButton: false,
};

const styles = StyleSheet.create({
  container: {},
  buttonText: {
    textAlign: 'center',
  },
});
