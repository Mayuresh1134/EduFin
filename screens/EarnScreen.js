import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';


function EarnScreen({ navigation }) {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('TimeManagerSection')}>
            <Text style={styles.navBarText}>   Time Manager</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('SavingsSummarySection')}>
            <Text style={styles.navBarText}> Savings Summary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('ExpenseManagerSection')}>
            <Text style={styles.navBarText}>Expense Manager</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default EarnScreen;