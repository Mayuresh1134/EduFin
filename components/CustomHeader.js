import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import styles from '../styles/styles'; 
import ProfileSection from './ProfileSection';

function CustomHeader({ navigation }) {
  const [isProfileVisible, setProfileVisible] = useState(false);

  const toggleProfileModal = () => {
    setProfileVisible(!isProfileVisible);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('CoinBalance')}>
          <Ionicons name="wallet" size={25} color="gold" />
          <Text style={styles.caption}>Wallet</Text>

        </TouchableOpacity>
        <Text style={styles.headerTitle}>FinMan</Text>
        <TouchableOpacity style={styles.headerButton} onPress={toggleProfileModal}>
          <Ionicons name="person" size={25} color="black" />
          <Text style={styles.caption}>Profile</Text>

        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isProfileVisible}
        onBackdropPress={toggleProfileModal}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        style={modalStyles.modal}
      >
        <View style={modalStyles.modalContent}>
          <TouchableOpacity onPress={toggleProfileModal} style={modalStyles.closeButton}>
            <Text style={modalStyles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <ProfileSection />
        </View>
      </Modal>
    </View>
  );
}



const modalStyles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-start',
    margin: 5,
    marginRight: -18, 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    width: '95%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  closeButtonText: {
    fontSize: 28,
  },
  
});

export default CustomHeader;
