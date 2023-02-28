import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
const [count, setCount] = useState(0);

  
  return (
    <View onClick={() => setCount(count + 1)} style={styles.container}>
      
      <Text style={styles.titulo}>Clicks:  {count} </Text> 
      <br></br>
      <br></br>
      <br></br>
      <Button
        onPress={() => setCount(count + 1)}
        title="Presionar"
        color="#008000"
        accessibilityLabel="boton para contar"
      />
      <br></br>
      <Button
        onPress={() => setCount(0)}
        title="Resetear"
        color="#F00"
        accessibilityLabel="boton de reinicio"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
