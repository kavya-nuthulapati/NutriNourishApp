// MealTracking.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppContext } from '../../Contexts/AppContext'; // Import useAppContext hook
import AddMeal from '../../Components/AddMeal';
import MealHistory from '../../Components/MealHistory';

const MealTracking = () => {
  const { meals, saveMeals } = useAppContext(); // Access meals state and saveMeals function from context

  const handleAddMeal = newMeal => {
    const updatedMeals = [...meals, newMeal];
    saveMeals(updatedMeals); // Update meals state using saveMeals function from context
  };

  return (
    <View style={styles.container}>
      <AddMeal onAddMeal={handleAddMeal} />
      <MealHistory meals={meals} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MealTracking;
