import React from 'react';
import {Text, Button} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {TagItem} from '../../../models';
import {FONT_SIZE_SMALL} from '../../../styles/typography';
import * as RootNavigation from '../../../navigation/RootNavigation';
export default function TagButton(props) {
  const tag = new TagItem(props.tag);
  // const navigation = useNavigation();
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
