
import React from 'react';
import { Icon, Thumbnail, Text } from 'native-base';
import { StyleSheet, View, Button, Image } from 'react-native';
import Animation from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FollowButton  extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={() =>
          alert('Following this thing')
        }
      >
        <Text style={styles.tagButtonStyle}>{this.props.name}</Text>
        </TouchableOpacity>

    </View>
    );
  }

  }


const styles = StyleSheet.create({
  container: {
  },
  tagButtonStyle: {
    backgroundColor: 'gray',
    borderRadius: 11,
    fontSize:15,
    textAlign:'center',
    padding:2,
    marginTop:4,
},
});


