import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddWeightEntry = ({ onSaveWeightEntry }) => {
  const [weight, setWeight] = useState('');

  const handleAddWeightEntry = () => {
    if (!weight) {
      alert('Please enter your weight.');
      return;
    }

    const newWeightEntry = {
      weight: parseFloat(weight),
      date: new Date().toISOString(),
    };

    onSaveWeightEntry(newWeightEntry);
    setWeight('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        placeholder="Enter weight"
        keyboardType="numeric"
      />
      <Button title="Add Weight Entry" onPress={handleAddWeightEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default AddWeightEntry;
