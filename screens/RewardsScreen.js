// RewardsScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import RewardCard from '../components/RewardCard';

const rewards = [
  {
    title: '10% Off Coupon',
    description: 'Use this coupon to get 10% off your next purchase.',
    image: 'https://via.placeholder.com/50',
  },
  {
    title: 'Free Coffee',
    description: 'Enjoy a free coffee at our partner stores.',
    image: 'https://via.placeholder.com/50',
  },
  {
    title: 'Gift Card',
    description: 'Redeem this gift card at any participating store.',
    image: 'https://via.placeholder.com/50',
  },
];

function RewardsScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.heading}>Rewards</Text>
      {rewards.map((reward, index) => (
        <RewardCard 
          key={index}
          title={reward.title}
          description={reward.description}
          image={reward.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#100D39'
  },
});

export default RewardsScreen;
