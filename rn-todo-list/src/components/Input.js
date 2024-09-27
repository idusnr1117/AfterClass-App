import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export const keyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const returnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({ title, placeholder, returnKeyType, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...props}
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType={returnKeyType}
      />
    </View>
  );
};

Input.defaultProps = {
  keyboardType: keyboardTypes.DEFAULT,
  returnKeyType: returnKeyTypes.DONE,
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.oneOf(Object.values(keyboardTypes)),
  returnKeyType: PropTypes.oneOf(Object.values(returnKeyTypes)),
  secureTextEntry: PropTypes.bool,
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
