import { StyleSheet, View, Image } from 'react-native';
import Input, { keyboardTypes, returnKeyTypes } from '../components/Input';
import { useState } from 'react';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/main.png')} style={styles.image} />

      <Input
        title={'이메일'}
        placeholder="test@gmail.com"
        keyboardType={keyboardTypes.EMAIL}
        returnKeyType={returnKeyTypes.NEXT}
        value={email}
        onChangeText={(email) => setEmail(email.trim())}
      />
      <Input
        title={'비밀번호'}
        returnKeyType={returnKeyTypes.DONE}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password.trim())}
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
