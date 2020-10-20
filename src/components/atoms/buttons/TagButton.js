import React from 'react';
<<<<<<< HEAD
import {Icon, Thumbnail, Text, Button} from 'native-base';
import {StyleSheet, View, Image} from 'react-native';
import Animation from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TagItem} from '../../../models';
import {useNavigation} from '@react-navigation/native';
import {FONT_SIZE_MEDIUM, FONT_SIZE_SMALL} from '../../../styles/typography';
import * as RootNavigation from '../../../navigation/RootNavigation';
export default function TagButton(props) {
  const tag = new TagItem(props.tag);
  // const navigation = useNavigation();
=======
import { Text, Button } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { TagItem } from '../../../models';
import { useNavigation } from '@react-navigation/native';

export default function TagButton(props){
    const tag = new TagItem(props.tag);
    const navigation = useNavigation();
>>>>>>> 1c12307ea1ebdc417be4c794b563ee52fa745b3c
  return (
    <View style={styles.container}>
      <Button
        style={styles.tagButtonStyle}
        rounded
        small
        light
        onPress={() => RootNavigation.navigate('Playlist', {topic: tag})}>
        <Text style={styles.tagButtonFontStyle}>{tag.value}</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  tagButtonStyle: {
    backgroundColor: 'gray',
    borderRadius: 11,
    textAlign: 'center',
    // padding:-3, marginTop:4,
  },
  tagButtonFontStyle: {
    fontSize: FONT_SIZE_SMALL,
  },
});
