import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddActivity = ({ onAddActivity }) => {
  const [activityName, setActivityName] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddActivity = () => {
    if (!activityName || !duration) {
      alert('Please fill out all fields.');
      return;
    }

    const activityDuration = parseInt(duration);
    const caloriesBurnt = activityDuration * 11;

    const newActivity = {
      name: activityName,
      duration: activityDuration,
      caloriesBurnt: caloriesBurnt,
      date: new Date().toISOString(),
    };

    onAddActivity(newActivity);
    setActivityName('');
    setDuration('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Activity Name:</Text>
      <TextInput
        style={styles.input}
        value={activityName}
        onChangeText={setActivityName}
        placeholder="Enter activity name"
      />
      <Text style={styles.label}>Duration (minutes):</Text>
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
        placeholder="Enter duration"
        keyboardType="numeric"
      />
      <Button title="Log Activity" onPress={handleAddActivity} />
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

export default AddActivity;
