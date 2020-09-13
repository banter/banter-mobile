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

Debug:

react-devtools 
ctrl+m on emulator 
click debug --- brings you to a localhost:8081
in console, top left of inspector next to clear console, select debuggerWorker...
Here you can put break points in and inspect the JS. In the dev tools can look at 
props and components and actively adjust


Have Emulator Up and running 
start up react-devtools


To Run on Your Phone
run: adb devices 
-This is used to check if your device is properly attached
npm run android


Clean Code:
Download jsx-beautify
ctrl/command + m on file you want to beautify
Note: If you have commented out code in your render, it may fuck up a little bit