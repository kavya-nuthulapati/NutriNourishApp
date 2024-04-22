import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignOutSettings = ({ onSignOut }) => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    if (onSignOut && typeof onSignOut === 'function') {
      onSignOut(); // Trigger the sign-out logic
    }
    navigation.navigate('Login'); // Navigate to the Login Screen
  };

  return (
    <View style={styles.settingItem}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    marginBottom: 10,
  },
});

export default SignOutSettings;

