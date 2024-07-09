import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import InvestmentSection from '../components/Investment';
import TradingSection from '../components/Trading';
import CalculatorSection from '../components/Calculator';

function GrowScreen({ navigation }) {

  const [currentSection, setCurrentSection] = useState('InvestmentSection');

  const renderSection = () => {
    switch (currentSection) {
      case 'InvestmentSection':
        return <InvestmentSection />;
      case 'TradingSection':
        return <TradingSection />;
      case 'CalculatorSection':
        return <CalculatorSection />;
      default:
        return <InvestmentSection />;
    }
  };


    return (
      
      <View style={styles.screenContainer}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={() => setCurrentSection('InvestmentSection')}>
          <Text style={styles.navBarText}>Investment Assistant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={() => setCurrentSection('TradingSection')}>
          <Text style={styles.navBarText}>Trading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={() => setCurrentSection('CalculatorSection')}>
          <Text style={styles.navBarText}>  Growth Calculator</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {renderSection()}
      </View>
    </View>
    );
  }

export default GrowScreen;