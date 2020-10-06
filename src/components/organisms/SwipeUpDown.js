import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { SwipeIcon } from '../molecules';
import assets from '../../assets';

import {
    Text,
  } from 'native-base';
import { GRAY_DARK } from '../../styles/colors';


const MARGIN_TOP = Platform.OS === 'ios' ? 20 : 0;
const DEVICE_HEIGHT = Dimensions.get('window').height - MARGIN_TOP;
type Props = {
  hasRef?: () => void,
  swipeHeight?: number,
  itemMini?: object,
  itemFull: object,
  disablePressToShow?: boolean,
  style?: object,
  onShowMini?: () => void,
  onShowFull?: () => void,
  animation?: 'linear' | 'spring' | 'easeInEaseOut' | 'none'
};
export default class SwipeUpDown extends Component<Props> {
  static defautProps = {
    disablePressToShow: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
    this.disablePressToShow = props.disablePressToShow;
    this.SWIPE_HEIGHT = props.swipeHeight || 60;
    this._panResponder = null;
    this.top = this.SWIPE_HEIGHT;
    this.height = this.SWIPE_HEIGHT;
    this.customStyle = {
      style: {
        bottom: 0,
        top: this.top,
        height: this.height,
      },
    };
    this.checkCollapsed = true;
    this.showFull = this.showFull.bind(this);
  }

 UNSAFE_componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderMove: this._onPanResponderMove.bind(this),
      onPanResponderRelease: this._onPanResponderRelease.bind(this),
    });
  }

  componentDidMount() {
    this.props.hasRef && this.props.hasRef(this);
    this.showFull();
  }

  updateNativeProps() {
    switch (this.props.animation) {
      case 'linear':
        LayoutAnimation.linear();
        break;
      case 'spring':
        LayoutAnimation.spring();
        break;
      case 'easeInEaseOut':
        LayoutAnimation.easeInEaseOut();
        break;
      case 'none':
      default:
        break;
    }
    this.viewRef.setNativeProps(this.customStyle);
  }

  _onPanResponderMove(event, gestureState) {
    console.log('Gesture Height', gestureState.dy);
    if (gestureState.dy > 0 && !this.checkCollapsed) {
      // SWIPE DOWN
      console.log('Gesture Height', gestureState.dy);
      this.customStyle.style.top = this.top + gestureState.dy;
      console.log('Gesture Height', gestureState.dy);
      this.customStyle.style.height = DEVICE_HEIGHT - gestureState.dy;
      this.swipeIconRef && this.swipeIconRef.setState({ icon: assets.minus });
      !this.state.collapsed && this.setState({ collapsed: true });
      this.updateNativeProps();
    } else if (this.checkCollapsed && gestureState.dy < -60) {
      // SWIPE UP
      this.top = 0;
      this.customStyle.style.top = DEVICE_HEIGHT + gestureState.dy;
      this.customStyle.style.height = -gestureState.dy + this.SWIPE_HEIGHT;
      this.swipeIconRef &&
        this.swipeIconRef.setState({ icon: assets.minus, showIcon: true });
      if (this.customStyle.style.top <= DEVICE_HEIGHT / 2) {
        this.swipeIconRef &&
          this.swipeIconRef.setState({
            icon: assets.arrow_down,
            showIcon: true,
          });
      }
      this.updateNativeProps();
      this.state.collapsed && this.setState({ collapsed: false });
    }
  }

  _onPanResponderRelease(event, gestureState) {
    if (gestureState.dy < -100 || gestureState.dy < 100) {
      this.showFull();
    } else {
      this.showMini();
    }
  }

  showFull() {
    const { onShowFull } = this.props;
    this.customStyle.style.top = 0;
    this.customStyle.style.height = DEVICE_HEIGHT;
    this.swipeIconRef &&
      this.swipeIconRef.setState({ icon: assets.arrow_down, showIcon: true });
    this.updateNativeProps();
    this.state.collapsed && this.setState({ collapsed: false });
    this.checkCollapsed = false;
    onShowFull && onShowFull();
  }

  showMini() {
      console.log('show Mini');
    const { onShowMini, itemMini } = this.props;
    console.log(DEVICE_HEIGHT, this.SWIPE_HEIGHT);
    this.customStyle.style.top = itemMini
      ? DEVICE_HEIGHT - this.SWIPE_HEIGHT
      : DEVICE_HEIGHT;
    this.customStyle.style.height = itemMini ? this.SWIPE_HEIGHT : 0;
    this.swipeIconRef && this.swipeIconRef.setState({ showIcon: false });
    this.updateNativeProps();
    !this.state.collapsed && this.setState({ collapsed: true });
    this.checkCollapsed = true;
    onShowMini && onShowMini();
  }

  render() {
    const { itemMini, itemFull, style } = this.props;
    const { collapsed } = this.state;
    return (
      <SafeAreaView
        ref={ref => (this.viewRef = ref)}
        {...this._panResponder.panHandlers}
        style={[
          styles.wrapSwipe,
          {
            height: this.SWIPE_HEIGHT,
            marginTop: MARGIN_TOP,
          },
          !itemMini && collapsed && { marginBottom: -200 },
          style,
        ]}
      >
        <SwipeIcon
          onClose={() => this.showMini()}
          hasRef={ref => (this.swipeIconRef = ref)}
        />
        {collapsed ? (
          itemMini ? (
            <TouchableOpacity
              activeOpacity={this.disablePressToShow ? 1 : 0.6}
              style={{ height: this.SWIPE_HEIGHT }}
              onPress={() => !this.disablePressToShow && this.showFull()}
            >
              {itemMini}
            </TouchableOpacity>
          ) : null
        ) : (
          itemFull
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapSwipe: {
    padding: 10,
    backgroundColor: GRAY_DARK,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
