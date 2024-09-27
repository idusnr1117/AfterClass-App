import { StyleSheet, Text, View, Image } from 'react-native';
import Input, { keyboardTypes, returnKeyTypes } from '../components/Input';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/main.png')} style={styles.image} />

      <Input
        title={'이메일'}
        placeholder="test@gmail.com"
        keyboardType={keyboardTypes.EMAIL}
        returnKeyType={returnKeyTypes.NEXT}
      />
      <Input
        title={'비밀번호'}
        returnKeyType={returnKeyTypes.DONE}
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
