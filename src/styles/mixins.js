import {Dimensions,PixelRatio} from 'react-native';
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const guidelineBaseWidth = 375;
export const NAV_BAR_HEIGHT = 65;
export const COLLAPSED_AUDIO_PLAYER_HEIGHT = 60;

export const percentageOfScreenHeight = percent => (WINDOW_HEIGHT ) * percent;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;


export const scaleFont = size => size * PixelRatio.getFontScale();

function dimensions(top, right = top, bottom = top, left = right, property){
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left){
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left){
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color, offset = {height:2,width:2},
                           radius = 8, opacity = 0.2){
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
