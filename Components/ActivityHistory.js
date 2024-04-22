import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ActivityHistory = ({ activities }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity History</Text>
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <Text>{item.name}</Text>
            <Text>Duration: {item.duration} minutes</Text>
            <Text>Calories Burnt: {item.duration * 11} calories</Text>
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
  activityItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ActivityHistory;
