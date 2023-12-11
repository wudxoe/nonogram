import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const NonogramCell = ({ isFilled, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.cell, isFilled ? styles.filled : null]} />
);

const GameScreen = ({ route }) => {
  const { gridSize } = route.params;
  const size = parseInt(gridSize.split('x')[0]);
  
  const [grid, setGrid] = useState(Array(size).fill(Array(size).fill(false)));

  const data = {
    '5x5': {
      rowNumbers: [[2], [2], [1], [5], [5]],
      columnNumbers: [[2], [2], [5], [2, 2], [2]]
    },
    '10x10': { //토끼
      rowNumbers: [
        [2, 2], [2, 2], [2, 2], [2, 2], [8], [10], [10], [2, 4, 2], [4, 4], [8]
      ],
      columnNumbers: [
        [4], [6], [7, 2], [10], [4, 1], [4, 1], [10], [7, 2], [6], [4]
      ]
    },
    '15x15' : { //페릿
      rowNumbers: [
        [2, 2], [7], [8], [4, 4], [1, 1, 2, 4], [1, 1, 9], [2, 10], [2, 9], [2, 2, 8], [14], [13], [13], [13], [8, 3], [4, 3, 2]
      ],
      columnNumbers: [
        [7], [7], [6], [2, 7], [1, 1, 7], [2, 3, 6], [13], [15], [3, 10], [2, 10], [13], [13], [13], [7, 4], [2]
      ]
    },
    '20x20': { //코뿔소
      rowNumbers: [
        [1, 1, 1], [1, 1, 1], [1, 1, 5], [12], [12, 3], [18], [19], [18], [15], [15], [15], [15], [15], [15], [13], [13], [2, 9], [2, 2, 2, 2], [2, 2, 2, 2], [3, 3, 6]
      ],
      columnNumbers: [
        [4], [4], [6], [5], [5], [12, 1], [20], [18], [16], [14, 1], [17], [17], [13], [12, 1], [15], [16], [13, 1], [16], [15], [8]
      ]
    }
  };
  
  const rowNumbers = data[gridSize].rowNumbers;
  const columnNumbers = data[gridSize].columnNumbers;

  const handleCellPress = (rowIndex, columnIndex) => {
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[rowIndex][columnIndex] = !newGrid[rowIndex][columnIndex];
    setGrid(newGrid);
  };

  const handleSubmit = () => {
    alert("제출 완료!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.numbersContainer}>
        <View style={styles.blankCorner} />
        {columnNumbers.map((nums, index) => (
          <View key={index} style={styles.columnNumbers}>
            {nums.map((num, subIndex) => (
              <Text key={subIndex} style={styles.numberText}>{num}</Text>
            ))}
          </View>
        ))}
      </View>
      {grid.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          <View style={styles.rowNumbers}>
            {rowNumbers[rowIndex].map((num, index) => (
              <Text key={index} style={styles.numberText}>{num}</Text>
            ))}
          </View>
          {row.map((cell, columnIndex) => (
            <NonogramCell
              key={columnIndex}
              isFilled={cell}
              onPress={() => handleCellPress(rowIndex, columnIndex)}
            />
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>제출하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  numbersContainer: {
    flexDirection: 'row',
  },
  blankCorner: {
    width: 50, // adjust as needed
    height: 100, // adjust as needed
  },
  columnNumbers: {
    justifyContent: 'flex-end',
    height: 100, // adjust as needed
    width: 25,
    alignItems: 'center',
  },
  rowNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50, // adjust as needed
    height: 25,
    alignItems: 'center',
  },
  numberText: {
    fontSize: 12,
  },
  cell: {
    width: 25,
    height: 25,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filled: {
    backgroundColor: 'black',
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default GameScreen;
