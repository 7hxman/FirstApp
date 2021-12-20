import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textbold}>Mr.Panyawan Liampakdeewong</Text>
      <Text>Mr.Panyawan Liampakdeewong</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#339999',
    alignItems: 'center',
    justifyContent: 'center',
},
textbold: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF',
},

});
