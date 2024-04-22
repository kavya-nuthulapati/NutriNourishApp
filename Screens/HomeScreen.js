import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProfileScreen from '../ProfileScreen';
import SettingsScreen from './Settings/SettingsScreen';
import SupportScreen from '../SupportScreen';
import MealTracking from './Dashboard/MealTracking';
import ActivityTracker from './Dashboard/ActivityTracker';
import WaterIntakeTracker from './Dashboard/WaterIntakeTracker';
import WeightTracker from './Dashboard/WeightTracker';
import Dashboard from './Dashboard/Dashboard';
const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {

  return (
    <Drawer.Navigator drawerPosition="right" initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        options={{ drawerLabel: 'Dashboard' }}
        component={Dashboard}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
    </Drawer.Navigator>
  );
};


HomeScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <HeaderButtons>
      <Item
        title="Drawer"
        iconName="menu"
        onPress={() => navigation.openDrawer()}
      />
    </HeaderButtons>
  ),
});

export default HomeScreen;
