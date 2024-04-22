import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AddActivity from '../../Components/AddActivity';
import ActivityHistory from '../../Components/ActivityHistory';
import { useAppContext } from '../../Contexts/AppContext'; // Import the AppContext

const ActivityTracker = () => {
  const { activities, saveActivities } = useAppContext(); // Access activities state and saveActivities function

  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    // Populate local state with activities from context when component mounts
    setActivitiesList(activities);
  }, [activities]); // Re-run effect when activities change

  const handleAddActivity = (newActivity) => {
    const updatedActivities = [...activitiesList, newActivity];
    setActivitiesList(updatedActivities);

    // Save updated activities to the app context
    saveActivities(updatedActivities);
  };

  return (
    <View style={styles.container}>
      <AddActivity onAddActivity={handleAddActivity} />
      <ActivityHistory activities={activitiesList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ActivityTracker;
