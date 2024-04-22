import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import { AuthProvider } from './Contexts/AuthContext';
import { AppProvider } from './Contexts/AppContext';
import EditProfile from './Components/EditProfile';
import ProfileSettings from './Screens/Settings/ProfileSettings';

const Stack = createStackNavigator();

const App = () => {
  const handleSignOut = () => {
    // Implement your sign-out logic here
    console.log('User signed out'); // Placeholder for sign-out logic
  };

  return (
    <AppProvider>
    <AuthProvider>   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={{ title: 'Profile Settings' }}/>
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
    </AppProvider>
  );
};

export default App;
