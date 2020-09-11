import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {UserContext} from '../context/UserContext';
import {View, Text, Button} from 'native-base';
export default function Login() {
  const [userInfo, setUserInfo] = useContext(UserContext);

  return (
    <View>
      <Text>Yer!</Text>
      <Button
        style={styles.testButton}
        title="Sign In"
        onPress={() => {
          setUserInfo((userInfo) => ({
            signedIn: true,
          }));
        }}
      />
      <Text>{Object.keys(userInfo)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  testButton: {
    backgroundColor: '#1DA2F2',
    width: 200,
    height: 200,
  },
});
