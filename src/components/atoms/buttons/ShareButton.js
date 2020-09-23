import React from 'react';
import { Share, View, Button } from 'react-native';
import { Icon } from 'native-base';

const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Banter, the new way to listen to sports Podcasts. https://banteraudio.com',
          url: 'https://banteraudio.com',
          title:'Banter',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
                    <Icon
              type="Entypo"
              name="share"
              onPress={onShare}
              style={{
              color: 'white',
}}/>
    </View>
  );
};

export default ShareExample;
