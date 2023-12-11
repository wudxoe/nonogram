import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function GameListScreen({ route, navigation }) {

  const { gridSize } = route.params;

  return (
    <View style={styles.AllContainer}>
      <Text style={styles.text}>GameList</Text>
      <View style={styles.gridContainer}>
        {[...Array(3)].map((_, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {[...Array(3)].map((_, colIndex) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("GameScreen", { gridSize: gridSize })}
              >
                <Image style={styles.imagebutton} source={require("../assets/123.png")} />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  AllContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  gridContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagebutton: {
    width: 100,
    height: 100,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default GameListScreen;
