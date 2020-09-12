import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import TagButton from '../commons/buttons/TagButton';
import _ from 'lodash';

export default class TagList extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <View style={styles.container}>
{this.props.tags.map((tag, key) => {
                    return (
                        <View style={styles.selectionRow} >
<TagButton name={tag.value} />
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
      justifyContent:'space-around',
  },
  selectionRow: {
    marginRight: 5,
  },
});
