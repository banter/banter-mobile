import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { NAV_BAR_HEIGHT } from '../styles/mixins';
import { GRAY_LIGHT } from '../styles/colors';
import { Icon } from 'native-base';
import { FONT_SIZE_VERY_SMALL } from '../styles/typography';

function BanterTabBar({ state, descriptors, navigation, isNavBarDisplayed }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    return (
        //
      <SafeAreaView style={isNavBarDisplayed === true ? styles.visible : styles.collapsed}>
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
          let icon;
          if (label === 'For You'){
              icon = <Icon style={styles.iconStyle} type="Entypo" name="fingerprint"/>;
          }
          else if (label === 'Explore'){
            icon = <Icon style={styles.iconStyle} name="ios-search"/>;
          }
          else if (label === 'Home'){
            icon = <Icon style={styles.iconStyle} type="Entypo" name="home"/>;
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
                {icon}
              <Text style={{ color: isFocused ? '#673ab7' : '#222', textAlign:'center', fontSize: FONT_SIZE_VERY_SMALL }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
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
    iconStyle: {
        textAlign:'center',
    },
}
  );

  function mapStateToProps(state) {
    return {isNavBarDisplayed: state.appStyleState.isNavBarDisplayed};
  }

  export default connect(mapStateToProps)(BanterTabBar);
