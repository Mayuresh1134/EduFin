import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      alignItems: 'center',
    },
    tabBar: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      elevation: 5,
      backgroundColor: '#100D39',
      borderRadius: 28,
      height: 70,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      borderTopWidth: 0,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      paddingTop: 40,
      paddingHorizontal: 10,
      paddingBottom: 10,
    },
    headerTitle: {
      color: '#100D39',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerButton: {
      padding: 10,
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#100D39',
      borderRadius: 30,
      padding: 3,
      marginTop: 10,
      width: '75%',
    },
    navBarButton: {
      flex: 1,
      alignItems: 'center',
      padding: 4,
    },
    navBarText: {
      color: 'white',
      fontSize: 12,
      alignItems: 'center',
    },
  });

export default styles;