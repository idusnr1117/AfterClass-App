import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARYA } from '../colors';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const keyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const returnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

export const IconNames = {
  EMAIL: 'email',
  PASSWORD: 'lock',
};

const Input = ({ title, placeholder, value, iconName, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          isFocused && styles.focusedTitle,
          isFocused && styles.hasValueTitle,
        ]}
      >
        {title}
      </Text>
      <TextInput
        {...props}
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          isFocused && styles.hasValueInput,
        ]}
        placeholder={placeholder ?? title}
        placeholderTextColor={GRAY.DEFAULT}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
  value: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARYA.DEFAULT,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
    borderColor: GRAY.DEFAULT,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARYA.DEFAULT,
    color: PRIMARYA.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
});

export default Input;
