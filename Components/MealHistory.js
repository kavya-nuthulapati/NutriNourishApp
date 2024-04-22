//MealHistory.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MealHistory = ({ meals }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal History</Text>
      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <View style={styles.mealItem}>
            <Text>{item.name}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Calories: {item.calories}</Text>
            <Text>Date: {new Date(item.date).toLocaleString()}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mealItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default MealHistory;
