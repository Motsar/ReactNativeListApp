import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const GoalItem = props =>{
    

    return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalCard} onT>
          <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>);
};

const styles= StyleSheet.create({
    goalCard: {
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        minHeight: 50,
        backgroundColor: "#d35400",
        padding: 5,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        overflow: "hidden"
      },
      textStyle: {
        fontFamily: "Roboto",
        fontSize: 20
      }
})

export default GoalItem;