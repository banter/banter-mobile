import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NAV_BAR_HEIGHT } from '../styles/mixins';
import { GRAY_LIGHT } from '../styles/colors';

function MyTabBar({ state, descriptors, navigation, isNavBarDisplayed }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    return (
        //
      <View style={isNavBarDisplayed === true ? styles.visible : styles.collapsed}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Text style={{ color: isFocused ? '#673ab7' : '#222', textAlign:'center' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  const styles = StyleSheet.create({
    visible: {
      height: NAV_BAR_HEIGHT,
      flexDirection: 'row',
      backgroundColor: GRAY_LIGHT,
    },
    collapsed: {
      height: '0%',
      flexDirection: 'row',
      backgroundColor: GRAY_LIGHT,
    },
}
  );

  function mapStateToProps(state) {
    return {isNavBarDisplayed: state.appStyleState.isNavBarDisplayed};
  }

  export default connect(mapStateToProps)(MyTabBar);
