import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles';


function SavingsSummarySection() {

  return (
    <View style={styles.screenContainer}>
      <Text style={Sumstyles.header}>Savings Summary</Text>
      <View style={Sumstyles.summaryContainer}>
        <Text style={Sumstyles.summaryText}>Total Savings:</Text>
        <Text style={Sumstyles.summaryText}>Monthly Savings: </Text>
        <Text style={Sumstyles.summaryText}>Yearly Savings: </Text>
      </View>
    </View>
  );
}

const Sumstyles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 10,
  },
});


export default SavingsSummarySection;
