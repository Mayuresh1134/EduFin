import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';
import CoinBalance from '../components/CoinBalance';
import ProfileSection from '../components/ProfileSection';
import TimeManagerSection from '../components/TimeManager';
import ExpenseManagerSection from '../components/ExpenseManager';
import SavingsSummarySection from '../components/SavingSection';
import InvestmentSection from '../components/Investment';
import TradingSection from '../components/Trading';
import CalculatorSection from '../components/Calculator';
import { StatusBar } from 'expo-status-bar';
import SignInScreen from '../components/SignInScreen'; // Import SignInScreen
import SignUpScreen from '../components/SignUpScreen'; // Import SignUpScreen

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="MainTabs">
        {/* <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />  */}
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="CoinBalance" component={CoinBalance} />
        <Stack.Screen name="ProfileSection" component={ProfileSection} />
        <Stack.Screen name="TimeManagerSection" component={TimeManagerSection} />
        <Stack.Screen name="ExpenseManagerSection" component={ExpenseManagerSection} />
        <Stack.Screen name="SavingsSummarySection" component={SavingsSummarySection} />
        <Stack.Screen name="InvestmentSection" component={InvestmentSection} />
        <Stack.Screen name="TradingSection" component={TradingSection} />
        <Stack.Screen name="CalculatorSection" component={CalculatorSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
