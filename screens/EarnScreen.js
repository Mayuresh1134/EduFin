import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import TimeManagerSection from '../components/TimeManager';
import ExpenseManagerSection from '../components/ExpenseManager';
import SavingsSummarySection from '../components/SavingSection';

function EarnScreen() {
  const [currentSection, setCurrentSection] = useState('TimeManager');

  const renderSection = () => {
    switch (currentSection) {
      case 'TimeManager':
        return <TimeManagerSection />;
      case 'SavingsSummary':
        return <SavingsSummarySection />;
      case 'ExpenseManager':
        return <ExpenseManagerSection />;
      default:
        return <TimeManagerSection />;
    }
  };

  return (
    <>
    <View style={styles.screenContainer}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={() => setCurrentSection('TimeManager')}>
          <Text style={styles.navBarText}>Time Manager</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={() => setCurrentSection('SavingsSummary')}>
          <Text style={styles.navBarText}>Savings Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={() => setCurrentSection('ExpenseManager')}>
          <Text style={styles.navBarText}>Expense Manager</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    <View style={styles.content}>
    {renderSection()}
    </View>
    </>
    
    
  );
}


export default EarnScreen;