import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = ({ variant, style, onChangeText, value, ...props }) => {
  const handleChangeText = (text) => {
    if (variant === 'date') {
      // Remover todos os caracteres não numéricos
      const cleaned = text.replace(/[^0-9]/g, '');

      // Formatar a data
      let formatted = '';
      if (cleaned.length <= 2) {
        formatted = cleaned;
      } else if (cleaned.length <= 4) {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
      } else {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
      }

      onChangeText(formatted);
    } else {
      onChangeText(text);
    }
  };

  return (
    <TextInput
      style={[styles.input, variant === 'date' && styles.dateInput, style]}
      value={value}
      onChangeText={handleChangeText}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    marginBottom: 8,
  }
});

export default Input;

