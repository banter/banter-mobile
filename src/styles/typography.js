import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_10 = scaleFont(10);

export const FONT_SIZE_MEDIUM = FONT_SIZE_14;
export const FONT_SIZE_SMALL = FONT_SIZE_12;
export const FONT_SIZE_VERY_SMALL = FONT_SIZE_10;

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};


export const titleText = {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  };

export const descriptionText = {
    fontSize: 15,
    color: '#AAAAAA',
  };



