import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useAuth } from './Contexts/AuthContext';

const ProfileScreen = () => {
  const { user } = useAuth(); // Access user data from AuthContext

  return (
    <View style={styles.container}>
      <Image source={user.profilePicture} style={styles.profileImage} />
      <Text style={styles.username}>{user.name}</Text>
      <Text style={styles.userInfo}>Email: {user.email}</Text>
      <Text style={styles.userInfo}>Age: {user.age}</Text>
      {/* Additional profile-related content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ProfileScreen;
