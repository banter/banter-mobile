import React from 'react';
import {Share, View, Button, Platform} from 'react-native';
import {Icon, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ShareButton = () => {
  const onShare = async() => {
    try {
      let shareMessage = 'Banter, the new way to listen to sports Podcasts.';
      shareMessage = Platform.OS === 'ios'
        ? shareMessage
        : shareMessage + ' https://banteraudio.com';
      const result = await Share.share({message: shareMessage, url: 'https://banteraudio.com', title: 'Banter'});
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

    <TouchableOpacity onPress={onShare}>
      <Text>
        <Icon type="Entypo" name="share" style={{
          color: 'white',
        }}/>
      </Text>
    </TouchableOpacity>
  );
};

export default ShareButton;
