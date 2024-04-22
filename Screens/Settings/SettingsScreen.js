import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationsSettings from './NotificationsSettings';
import ProfileSettings from './ProfileSettings';
import SignOutSettings from './SignOutSettings';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <NotificationsSettings />
      <ProfileSettings navigation={navigation} />
      <SignOutSettings />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;
