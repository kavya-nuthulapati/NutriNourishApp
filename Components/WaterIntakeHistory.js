import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAppContext } from '../Contexts/AppContext';

const WaterIntakeHistory = () => {
  const { waterIntakes } = useAppContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Intake History</Text>
      <FlatList
        data={waterIntakes}
        renderItem={({ item }) => (
          <View style={styles.waterIntakeItem}>
            <Text>Amount: {item.amount} ml</Text>
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
  waterIntakeItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default WaterIntakeHistory;
