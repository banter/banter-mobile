import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MOCKTEAMS from '../constants/mock-teams';

const teams = MOCKTEAMS;
const TeamSelectionScroll = (props) => {
    // const {name} = props.route.params;
    return (
      <View style={styles.container}>
{teams.map((team) => {
              return (
<Text> {team.value}</Text>
              );
            })}
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
  },
});

export default TeamSelectionScroll;
