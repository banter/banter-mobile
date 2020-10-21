import React from 'react';
import { StyleSheet, View} from 'react-native';
import _ from 'lodash';
import { FollowButton } from '../atoms';

export default class TeamSelectionScroll extends React.Component {
    constructor(props) {
        super(props);
      }

    groupedTeams() {
        return _.chunk(this.props.teams, this.props.teamsPerRow);
      }

    render() {
        return (
            <View style={styles.container}>
{this.groupedTeams().map((teams, key) => {
                    return (
                        <View key={key} style={styles.selectionRow}>
{teams.map((team, index) => {
                    return (
                        <View key={index}>
<FollowButton isIconButton={true} text={team.value} />
                        </View>
                    );
                  })}
                  </View>
                    );
                  })}
            </View>
          );
        }

    }


const styles = StyleSheet.create({
  container: {
  },
  selectionRow: {
    flexDirection: 'row',
    justifyContent:'space-around',
    marginBottom: 15,
  },
});
