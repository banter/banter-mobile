import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData({url, method = 'GET'}) {
  const token = await AsyncStorage.getItem('token');
  const headers = token ? new Headers({
    'Authorization': `Bearer ${token}`,
  }) : null;
  const response = await fetch(url, {method, headers});
  const data = await response.json();
  return data;
}
