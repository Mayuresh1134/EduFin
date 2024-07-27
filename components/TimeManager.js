import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function TimeManagerSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Time Spent</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Sleep"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="School/Work Hours"
          keyboardType="numeric"
        />
      </View>
      <TextInput
        style={styles.inputFull}
        placeholder="Miscellaneous"
        keyboardType="numeric"
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  inputFull: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 8,

  },
});

export default TimeManagerSection;
