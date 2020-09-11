In order to get started with this project, you'll need to have React Native and all of it's dependencies.

I'd recommend following [This Guide](https://reactnative.dev/docs/environment-setup)'s React Native CLI Quickstart setup. We do not use Expo.

Once you're all set up:

`npm i`, `npm start`, then open a new terminal window and `npm run ios`

For debugging, I'd highly recommend using [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

To launch it, run `open "rndebugger://set-debugger-loc?host=localhost&port=8081"`

Keep these notes in mind if it's not working
```
Just these steps will let you start RNDebugger out of box:

- Install the latest version (download page).
- Make sure all debugger clients of React Native are closed, usually are http://localhost:<port>/debugger-ui
- Make sure RNDebugger is open and wait state.
RNDebugger will try connect to debugger proxy, use port 8081 by default, you can create a new debugger window (macOS: Command+T, - Linux/Windows: Ctrl+T) to specify the port if you want.
- Enable Debug JS Remotely of developer menu on your app
```