import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { MyLogin } from './app/views/MyLogin.js';
import { Register} from './app/views/Register.js';
import { Lesson } from './app/views/Lesson.js';
import { LessonDetail } from './app/views/LessonDetail.js';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fb5b5a',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Login" 
        component={MyLogin} 
        options={{ title: 'Login' }}
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ title: 'Register' }}
      />
      <Stack.Screen 
       name="Lesson" 
       component={Lesson} 
       options={{ title: 'Lesson'}}
      />
      <Stack.Screen
      name ="LessonDetail"
      component={ LessonDetail}
      options={{title: 'LessonDetail'}}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
    <NavStack />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
