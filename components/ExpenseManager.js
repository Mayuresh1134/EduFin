import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function ExpenseManagerSection() {
    return (
      <View style={styles.container}>
              <View style={styles.inputRow}>
      <Text style={styles.heading}>Today's Goal:</Text>
      <TextInput
          style={styles.input1}
          placeholder="Goal"
          keyboardType="numeric"
        />
        </View>
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
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
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

  input1: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 10,
    width: 200,

  },
});



export default ExpenseManagerSection;