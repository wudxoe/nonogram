import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import GameListScreen from './screens/GameListScreen'
import GameScreen from './screens/GameScreen';

const Stack = createStackNavigator();

const primaryColor = '#4a90e2';  // 기본 테마 색상을 파란색으로 변경
const secondaryColor = '#ffffff'; 

const commonHeaderOptions = {
  headerStyle: {
    backgroundColor: primaryColor,
    elevation: 5,  // Android 용 그림자
    shadowOpacity: 0.2, // iOS용 그림자
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
  },
  headerTintColor: secondaryColor,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitleVisible: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={commonHeaderOptions}>
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ 
            title: 'Main',
          }}
        />
        <Stack.Screen 
          name="List" 
          component={GameListScreen} 
          options={{
            title: 'Game List',
          }}
        />
        <Stack.Screen 
          name="GameScreen" 
          component={GameScreen} 
          options={{
            title: 'Game',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
