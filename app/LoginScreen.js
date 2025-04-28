import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList-App</Text>

      <image
      source={require('../assets/images/beranda.jpg')}
      style={styles.image}
      />
      <image
      source={require('../assets/images/daftar list.jpg')}
      style={styles.images}
      />
      <image 
      source={require('../assets/images/ubah list.jpg')}
      />

      <Text style={styles.subtitle}>Create an account</Text>
      <Text style={styles.description}>Enter your email to sign up for this app</Text>

      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="google" size={20} color="#000" />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' && (
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={20} color="#000" />
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.footerText}>
        By clicking continue, you agree to our Terms of Service and Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff',
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: '500' },
  description: { color: '#666', marginBottom: 20 },
  input: {
    width: '100%', height: 50, borderColor: '#ccc', borderWidth: 1,
    borderRadius: 8, paddingHorizontal: 10, marginBottom: 15,
  },
  continueButton: {
    width: '100%', height: 50, backgroundColor: '#0A84FF',
    borderRadius: 8, justifyContent: 'center', alignItems: 'center',
  },
  continueText: { color: '#fff', fontWeight: 'bold' },
  orText: { marginVertical: 10, color: '#666' },
  socialButton: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, width: '100%', marginTop: 10,
  },
  socialText: { marginLeft: 10 },
  footerText: { fontSize: 12, color: '#999', textAlign: 'center', marginTop: 20 },
});
