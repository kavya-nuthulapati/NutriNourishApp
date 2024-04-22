import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddMeal = ({ onAddMeal }) => {
  const [mealName, setMealName] = useState('');
  const [mealType, setMealType] = useState('');
  const [calories, setCalories] = useState('');

  const handleAddMeal = () => {
    if (!mealName || !mealType || !calories) {
      alert('Please fill out all fields.');
      return;
    }

    const newMeal = {
      name: mealName,
      type: mealType,
      calories: parseInt(calories),
      date: new Date().toISOString(),
    };

    onAddMeal(newMeal);
    setMealName('');
    setMealType('');
    setCalories('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Meal Name:</Text>
      <TextInput
        style={styles.input}
        value={mealName}
        onChangeText={setMealName}
        placeholder="Enter meal name"
      />
      <Text style={styles.label}>Meal Type:</Text>
      <TextInput
        style={styles.input}
        value={mealType}
        onChangeText={setMealType}
        placeholder="Enter meal type"
      />
      <Text style={styles.label}>Calories:</Text>
      <TextInput
        style={styles.input}
        value={calories}
        onChangeText={setCalories}
        placeholder="Enter calories"
        keyboardType="numeric"
      />
      <Button title="Add Meal" onPress={handleAddMeal} />
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

export default AddMeal;
