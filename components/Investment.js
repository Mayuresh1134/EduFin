import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function InvestmentSection() {
    const [investmentAmount, setInvestmentAmount] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    const [returnPercentage, setReturnPercentage] = useState('');

    return (
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Investment Assistant</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Investment Amount:</Text>
          <TextInput 
            style={styles.input} 
            value={investmentAmount} 
            onChangeText={setInvestmentAmount} 
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Risk Level:</Text>
          <TextInput 
            style={styles.input} 
            value={riskLevel} 
            onChangeText={setRiskLevel} 
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Return Percentage:</Text>
          <TextInput 
            style={styles.input} 
            value={returnPercentage} 
            onChangeText={setReturnPercentage} 
            keyboardType="numeric"
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    inputContainer: {
        marginBottom: 16,
        width: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 8,
        borderRadius: 4,
    },
});

export default InvestmentSection;
