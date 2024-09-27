import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export const keyboradTypes = {
  DEFALUT: 'default',
  EMAIL: 'email-address',
};

const Input = ({ title, placeholder, keyboradType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboradType}
      />
    </View>
  );
};

Input.defaultProps = {
  keyboradType: keyboradTypes.DEFALUT,
};

Input.PropTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboradType: PropTypes.oneOf(Object.values(keyboradTypes)),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Input;
