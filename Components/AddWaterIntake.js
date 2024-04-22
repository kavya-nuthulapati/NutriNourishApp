import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddWaterIntake = ({ onSaveWaterIntake }) => {
  const [amount, setAmount] = useState('');

  const handleAddWaterIntake = () => {
    if (!amount) {
      alert('Please enter the amount of water intake.');
      return;
    }

    const newWaterIntake = {
      amount: parseInt(amount),
      date: new Date().toISOString(),
    };

    onSaveWaterIntake(newWaterIntake);
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Amount (ml):</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      <Button title="Add Water Intake" onPress={handleAddWaterIntake} />
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

export default AddWaterIntake;
