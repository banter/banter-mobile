import React from 'react';
import {StyleSheet, View} from 'react-native';
import TagButton from '../atoms/buttons/TagButton';
import _ from 'lodash';

export default class TagList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Icon type="AntDesign" name="tago" style={{color:'white'}} /> */}
        {this
          .props
          .tags
          .map((tag, index) => {
            return (
              <View key={index} style={styles.selectionRow}>
                <TagButton name={tag.value}/>
              </View>
            );
          })}

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent:'space-around',
    flexWrap: 'wrap',
  },
  selectionRow: {
    marginRight: 5,
  },
});
