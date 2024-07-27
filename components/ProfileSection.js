import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';

function ProfileSection() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/100' }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.profileOption} onPress={() => alert('Update Profile pressed')}>
        <Text style={styles.profileOptionText}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileOption} onPress={() => alert('Change Password pressed')}>
        <Text style={styles.profileOptionText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileOption} onPress={() => alert('Set Goals pressed')}>
        <Text style={styles.profileOptionText}>Set Goals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileOption} onPress={() => alert('Check Balance pressed')}>
        <Text style={styles.profileOptionText}>Check Balance</Text>
      </TouchableOpacity>
      <Button
        title="Logout"
        onPress={() => alert('Logout button pressed')}
        color="#f05d23"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 18,
    color: '#666',
  },
  profileOption: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  profileOptionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ProfileSection;
