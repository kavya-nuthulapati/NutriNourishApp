import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [meals, setMeals] = useState([]);
  const [activities, setActivities] = useState([]);
  const [waterIntakes, setWaterIntakes] = useState([]);
  const [weightEntries, setWeightEntries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }

        const storedMeals = await AsyncStorage.getItem('meals');
        if (storedMeals) {
          setMeals(JSON.parse(storedMeals));
        }

        const storedActivities = await AsyncStorage.getItem('activities');
        if (storedActivities) {
          setActivities(JSON.parse(storedActivities));
        }

        const storedWaterIntakes = await AsyncStorage.getItem('waterIntakes');
        if (storedWaterIntakes) {
          setWaterIntakes(JSON.parse(storedWaterIntakes));
        }

        const storedWeightEntries = await AsyncStorage.getItem('weightEntries');
        if (storedWeightEntries) {
          setWeightEntries(JSON.parse(storedWeightEntries));
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  const saveUserData = async (data) => {
    try {
      setUserData(data);
      await AsyncStorage.setItem('userData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving user data to AsyncStorage:', error);
    }
  };

  const saveMeals = async (newMeals) => {
    try {
      setMeals(newMeals);
      await AsyncStorage.setItem('meals', JSON.stringify(newMeals));
    } catch (error) {
      console.error('Error saving meals to AsyncStorage:', error);
    }
  };

  const saveActivities = async (newActivities) => {
    try {
      setActivities(newActivities);
      await AsyncStorage.setItem('activities', JSON.stringify(newActivities));
    } catch (error) {
      console.error('Error saving activities to AsyncStorage:', error);
    }
  };

  const saveWaterIntakes = async (newWaterIntakes) => {
    try {
      setWaterIntakes(newWaterIntakes);
      await AsyncStorage.setItem('waterIntakes', JSON.stringify(newWaterIntakes));
    } catch (error) {
      console.error('Error saving water intakes to AsyncStorage:', error);
    }
  };

  const saveWeightEntries = async (newWeightEntries) => {
    try {
      setWeightEntries(newWeightEntries);
      await AsyncStorage.setItem('weightEntries', JSON.stringify(newWeightEntries));
    } catch (error) {
      console.error('Error saving weight entries to AsyncStorage:', error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        meals,
        activities,
        waterIntakes,
        weightEntries,
        saveWeightEntries,
        saveUserData,
        saveMeals,
        saveActivities,
        saveWaterIntakes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
