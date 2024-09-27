import { StyleSheet, Text, View } from 'react-native';
import Input, { keyboradTypes } from '../components/Input';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/main.png')} style={styles.image} />

      <input
        title={'이메일'}
        placeholder="test@gmail.com"
        keyboardType={keyboradTypes.EMAIL}
      />
      <input title={'비밀번호'} />
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
