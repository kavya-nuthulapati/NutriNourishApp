// Dashboard.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MealTracking from './MealTracking';
import ActivityTracker from './ActivityTracker';
import WaterIntakeTracker from './WaterIntakeTracker';
import WeightTracker from './WeightTracker';

const Stack = createStackNavigator();

const Dashboard = () => {
  return (
    <Stack.Navigator initialRouteName="DashboardHome">
      <Stack.Screen
        name="DashboardHome"
        component={DashboardHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MealTracking" component={MealTracking} />
      <Stack.Screen name="ActivityTracker" component={ActivityTracker} />
      <Stack.Screen name="WaterIntakeTracker" component={WaterIntakeTracker} />
      <Stack.Screen name="WeightTracker" component={WeightTracker} />
    </Stack.Navigator>
  );
};

const DashboardHome = ({ navigation }) => {
  const goToMealTracking = () => {
    navigation.navigate('MealTracking');
  };

  const goToActivityTracker = () => {
    navigation.navigate('ActivityTracker');
  };

  const goToWaterIntakeTracker = () => {
    navigation.navigate('WaterIntakeTracker');
  };

  const goToWeightTracker = () => {
    navigation.navigate('WeightTracker');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Dashboard</Text>
      <Text style={styles.title}>Track your Meal</Text>
      <Button title="Log Meal" onPress={goToMealTracking} />
      <Text style={styles.title}>Activity Tracker</Text>
      <Button title="Log Activity" onPress={goToActivityTracker} />
      <Text style={styles.title}>Water Tracker</Text>
      <Button title="Log Water Intake" onPress={goToWaterIntakeTracker} />
      <Text style={styles.title}>Weight Tracker</Text>
      <Button title="Log Weight" onPress={goToWeightTracker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Dashboard;
