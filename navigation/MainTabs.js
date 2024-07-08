import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader';
import EarnScreen from '../screens/EarnScreen';
import GrowScreen from '../screens/GrowScreen';
import RewardsScreen from '../screens/RewardsScreen';
import styles from '../styles/styles';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        header: () => <CustomHeader navigation={navigation} />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Earn') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Grow') {
            iconName = focused ? 'trending-up' : 'trending-up-outline';
          } else if (route.name === 'Rewards') {
            iconName = focused ? 'gift' : 'gift-outline';
          }
          return <Ionicons name={iconName} size={size} color={"white"} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Earn" component={EarnScreen} />
      <Tab.Screen name="Grow" component={GrowScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;
