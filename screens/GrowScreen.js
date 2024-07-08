import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';


function GrowScreen({ navigation }) {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('InvestmentSection')}>
            <Text style={styles.navBarText}>Investment Assistant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('TradingSection')}>
            <Text style={styles.navBarText}>Trading</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('CalculatorSection')}>
            <Text style={styles.navBarText}>  Growth Calculator</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default GrowScreen;