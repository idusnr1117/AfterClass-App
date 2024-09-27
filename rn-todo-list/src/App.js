import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screen/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SignInScreen />
      <Text style={{ fontSize: 30 }}>ToDo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
