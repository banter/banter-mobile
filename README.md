In order to get started with this project, you'll need to have React Native and all of it's dependencies.

I'd recommend following [This Guide](https://reactnative.dev/docs/environment-setup)'s React Native CLI Quickstart setup. We do not use Expo.

Once you're all set up:

`npm i`, `npm start`, then open a new terminal window and `npm run ios`

-------
Android via/ Windows
-------
Upgrading SDK Licensing via Android Studio
https://stackoverflow.com/questions/57124607/react-native-failed-to-install-the-app-please-accept-all-necessary-sdk-licens/59249008

Manual Run On Machine Emulator

cd $ANDROID_HOME (Users/<User>/ApoData/Local/Android/Sdk)

emulator @<deviceName> 
ex) emulator @Pixel_2_API_27

To see list of Devices ---- emulator -list-avds

npm run android 
npx react-native run-android