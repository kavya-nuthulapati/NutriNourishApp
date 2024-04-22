import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationsSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(prevState => !prevState);
    // Implement logic to update notification preferences in AsyncStorage or server
  };

  return (
    <View style={styles.settingItem}>
      <Text>Enable Notifications</Text>
      <Switch
        value={notificationsEnabled}
        onValueChange={toggleNotifications}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default NotificationsSettings;
