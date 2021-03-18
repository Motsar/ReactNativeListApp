import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/Goalitem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
  }

  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal)=>goal.id !== goalId);
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.scrollBox}>
        <FlatList
          keyExtractor={(item,index) => item.id}
          data={courseGoals}
          renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a8ff',
    padding: 20
  },
  scrollBox:{
    paddingBottom:50
  }
});
