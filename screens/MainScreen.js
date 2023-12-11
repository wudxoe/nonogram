import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // TouchableOpacity 추가
import { Picker } from '@react-native-picker/picker';

function MainScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('5x5');

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="5x5" value="5x5" />
        <Picker.Item label="10x10" value="10x10" />
        <Picker.Item label="15x15" value="15x15" />
        <Picker.Item label="20x20" value="20x20" />
      </Picker>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List', { gridSize: selectedValue })}
      >
        <Text style={styles.buttonText}>게임 시작</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: 150,
    height: 50,
  },
  // TouchableOpacity 스타일 추가
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MainScreen;
