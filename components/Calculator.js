import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function CalculatorSection() {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [periods, setPeriods] = useState('');
    const [futureValue, setFutureValue] = useState(null);

    const calculateFutureValue = () => {
        const P = parseFloat(principal);
        const r = parseFloat(rate) / 100;
        const n = parseInt(periods);
        
        if (!isNaN(P) && !isNaN(r) && !isNaN(n)) {
            const FV = P * Math.pow(1 + r, n);
            setFutureValue(FV.toFixed(2));
        } else {
            setFutureValue(null);
        }
    };

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Growth Calculator</Text>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Principal Amount:</Text>
                <TextInput 
                    style={styles.input} 
                    value={principal} 
                    onChangeText={setPrincipal} 
                    keyboardType="numeric"
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Rate of Return (%):</Text>
                <TextInput 
                    style={styles.input} 
                    value={rate} 
                    onChangeText={setRate} 
                    keyboardType="numeric"
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Number of Periods:</Text>
                <TextInput 
                    style={styles.input} 
                    value={periods} 
                    onChangeText={setPeriods} 
                    keyboardType="numeric"
                />
            </View>
            
            <Button title="Calculate" onPress={calculateFutureValue} />
            
            {futureValue !== null && (
                <View style={styles.resultBox}>
                    <Text style={styles.result}>
                        Future Value: ₹{futureValue}
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    // screenContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: 16,
    // },
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
    resultBox: {
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#100D39',
        borderRadius: 4,
        backgroundColor: '#948FE5',
        width: '100%',
        alignItems: 'center',
    },
    result: {
        fontSize: 15,
        color: '#100D39',
    },
});

export default CalculatorSection;
