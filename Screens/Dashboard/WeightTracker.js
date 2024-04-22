import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddWeightEntry from '../../Components/AddWeightEntry';
import WeightHistory from '../../Components/WeightHistory';
import { useAppContext } from '../../Contexts/AppContext';

const WeightTracker = () => {
  const { saveWeightEntries, weightEntries } = useAppContext();

  const handleSaveWeightEntry = (newWeightEntry) => {
    const updatedWeightEntries = [...weightEntries, newWeightEntry];
    saveWeightEntries(updatedWeightEntries);
  };

  return (
    <View style={styles.container}>
      <AddWeightEntry onSaveWeightEntry={handleSaveWeightEntry} />
      <WeightHistory />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default WeightTracker;
