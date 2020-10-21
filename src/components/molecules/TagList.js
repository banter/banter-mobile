import React from 'react';
import {StyleSheet, View} from 'react-native';
import _ from 'lodash';
import { TagButton } from '../atoms';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import { smallIconStyle } from '../../styles/icons';

export default class TagList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tagIcon;
    if (this.props.isIconDisplayed){
      tagIcon = <Icon type="AntDesign" name="tag" style={styles.smallIconStyle}/>;
    }
    return (
      <View style={styles.container}>
        {tagIcon}
        {this
          .props
          .tags
          .map((tag, index) => {
            // FIXME Limits number of tags displayed to 4, this is a slightly
            // lazy implementation
            if (index < 4){
              return (
                <View key={index} style={styles.selectionRow}>
                  <TagButton tag={tag}/>
                </View>
              );
            }

          })}

      </View>
    );
  }

}

TagList.propTypes = {     isIconDisplayed: PropTypes.bool   };

TagList.defaultProps = {
  isIconDisplayed: true,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent:'space-around',
    flexWrap: 'wrap',
  },
  selectionRow: {
    marginRight: 5,
  },
  smallIconStyle: {
    ...smallIconStyle,
  },

});
