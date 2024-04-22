import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileSettings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text>Edit Profile</Text>
        <Button
          title="Edit"
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default ProfileSettings;
