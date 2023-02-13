import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';




export default function App() {
const [count, setCount] = useState(0);

  
  return (
    <View style={styles.container}>
      
      <Text >Contar Clicks:  {count} </Text> 
      <Button
        onPress={() => setCount(count + 1)}
        title="Tocame"
        color="#841584"
        accessibilityLabel="boton para contar"
      />

      <Button
        onPress={() => setCount(0)}
        title="Resetear"
        color="#f83"
        accessibilityLabel="boton de reinicio"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
