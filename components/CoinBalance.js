import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CoinBalance() {
  const balance = 1200; // Sample data
  const transactions = [
    { id: 1, date: '2024-01-01', amount: 200, type: 'Credit' },
    { id: 2, date: '2024-01-05', amount: 150, type: 'Debit' },
    { id: 3, date: '2024-01-10', amount: 300, type: 'Credit' },
  ];

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.header}>Coin Balance</Text>
      <Text style={styles.balanceText}>Current Balance: ${balance}</Text>
      <Text style={styles.subHeader}>Recent Transactions</Text>
      {transactions.map(transaction => (
        <View key={transaction.id} style={styles.transactionContainer}>
          <Text style={styles.transactionText}>{transaction.date}</Text>
          <Text style={styles.transactionText}>{transaction.type}</Text>
          <Text style={styles.transactionText}>${transaction.amount}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 20,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionText: {
    fontSize: 16,
  },
});

export default CoinBalance;
