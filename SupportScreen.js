import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import Support_image from  "./assets/Support_image.jpg";

const SupportScreen = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // You can implement logic here to send the message (e.g., via email)
    if (message.trim() === '') {
      alert('Please enter a message before sending.');
      return;
    }

    const supportEmail = 'support@NutriNourish.com';
    const subject = 'Support Request';
    const emailBody = `Message: ${message}`;

    const mailtoLink = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    Linking.openURL(mailtoLink);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Support_image.jpg')} style={styles.headerImage} />

      <View style={styles.contactContainer}>
        <Text style={styles.contactLabel}>Contact Us:</Text>
        <Text style={styles.contactDetail}>Email: support@NutriNourish.com</Text>
        <Text style={styles.contactDetail}>Phone: 123-456-7890</Text>
      </View>

      <View style={styles.messageContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Type your message..."
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  contactContainer: {
    marginBottom: 20,
  },
  contactLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
  messageContainer: {
    width: '100%',
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 100,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SupportScreen;
