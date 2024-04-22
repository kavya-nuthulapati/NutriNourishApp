import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddWaterIntake from '../../Components/AddWaterIntake';
import WaterIntakeHistory from '../../Components/WaterIntakeHistory';
import { useAppContext } from '../../Contexts/AppContext';

const WaterIntakeTracker = () => {
  const { saveWaterIntakes, waterIntakes } = useAppContext();

  const handleSaveWaterIntake = (newWaterIntake) => {
    const updatedWaterIntakes = [...waterIntakes, newWaterIntake];
    saveWaterIntakes(updatedWaterIntakes);
  };

  return (
    <View style={styles.container}>
      <AddWaterIntake onSaveWaterIntake={handleSaveWaterIntake} />
      <WaterIntakeHistory />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default WaterIntakeTracker;
