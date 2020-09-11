import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import FollowButton from '../commons/buttons/FollowButton';
import _ from 'lodash';

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
                        <View style={styles.selectionRow}>
{teams.map((team, key) => {
                    return (
                        <View >
<FollowButton name={team.value} />
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
