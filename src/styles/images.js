import { WINDOW_WIDTH } from './mixins';

const LARGE_IMAGE_SIZE = WINDOW_WIDTH / 3;

export const  largeThumbnailStyle =  {
    borderRadius: 10,
    height: LARGE_IMAGE_SIZE,
    width: LARGE_IMAGE_SIZE,
    backgroundColor: 'white',
  };

const SMALL_THUMBNAIL_SIZE = 60;
  export const  smallThumbnailStyle =  {
    borderRadius: 5,
    height: SMALL_THUMBNAIL_SIZE,
    width: SMALL_THUMBNAIL_SIZE,
    backgroundColor: 'white',
  };
