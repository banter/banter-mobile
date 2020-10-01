import React from 'react';
import {StyleSheet, View} from 'react-native';
import _ from 'lodash';
import { TagButton } from '../atoms';

export default class TagList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this
          .props
          .tags
          .map((tag, index) => {
            return (
              <View key={index} style={styles.selectionRow}>
                <TagButton tag={tag}/>
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
