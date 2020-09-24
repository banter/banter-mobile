import { GRAY_DARK } from './colors';

export const LARGE_CORNER_RADIUS = 20;
export const SMALL_CORNER_RADIUS = 10;

export const cardItem = {
    paddingVertical: -5,
    borderRadius: LARGE_CORNER_RADIUS,
    backgroundColor: GRAY_DARK,
    paddingBottom: 5,
    paddingTop: 8,
  };



export const  centeredTransparentCardItem = {
    ...cardItem,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: -3,
    backgroundColor: 'transparent',
    paddingTop: 5,
  };
