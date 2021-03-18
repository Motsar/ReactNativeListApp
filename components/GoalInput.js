import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    
      }

    return (<View style={styles.addGoal}>
        <TextInput placeholder="Course Goal" style={styles.addGoalInput} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="ADD" color="black" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>)
}

const styles =StyleSheet.create({
    addGoal: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "3%"
    },
        addGoalInput: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 20,
        color: "black",
        fontSize: 20,
        fontFamily: "Roboto",
        width: "80%"
    }
}) 

export default GoalInput;