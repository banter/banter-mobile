
import React from 'react';
import { Icon, Thumbnail, Text, Button } from 'native-base';
import { StyleSheet, View,  Image } from 'react-native';
import Animation from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TagButton  extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
  return (
    <View style={styles.container}>
      <Button style={styles.tagButtonStyle} rounded small light>
      <Text>{this.props.name}</Text>
    </Button>
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


