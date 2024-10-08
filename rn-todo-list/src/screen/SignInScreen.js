import { StyleSheet, View, Image, Keyboard, Alert } from 'react-native';
import Input, {
  keyboardTypes,
  returnKeyTypes,
  IconNames,
} from '../components/Input';
import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      try {
        Keyboard.dismiss();
        const data = await signIn(email, password);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        Alert.alert('로그인 실패', error, [
          { text: '확인', onPress: () => setIsLoading(false) },
        ]);
      }
    }
  };

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
        iconName={IconNames.EMAIL}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <Input
        ref={passwordRef}
        title={'비밀번호'}
        returnKeyType={returnKeyTypes.DONE}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password.trim())}
        iconName={IconNames.PASSWORD}
        onSubmitEditing={onSubmit}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="로그인"
          onPress={onSubmit}
          disabled={disabled}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default SignInScreen;
