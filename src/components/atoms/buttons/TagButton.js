
import React from 'react';
import { Icon, Thumbnail, Text, Button } from 'native-base';
import { StyleSheet, View,  Image } from 'react-native';
import Animation from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TagItem } from '../../../models';
import { useNavigation } from '@react-navigation/native';

export default function TagButton(props){
    const tag = new TagItem(props.tag);
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button style={styles.tagButtonStyle} rounded small light
      onPress={() =>
        navigation.navigate('Playlist', {
          topic: tag,
        })
      }>
      <Text>{tag.value}</Text>
    </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  },
  tagButtonStyle: {
    backgroundColor: 'gray',
    borderRadius: 11,
    fontSize:10,
    textAlign:'center',
    marginTop:4,
},
});

