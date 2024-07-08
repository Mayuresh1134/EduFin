import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

function CustomHeader({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('CoinBalance')}>
        <Ionicons name="wallet" size={24} color="gold" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>FinMan</Text>
      <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('ProfileSection')}>
        <Ionicons name="person" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default CustomHeader;
