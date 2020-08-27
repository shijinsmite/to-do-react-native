import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ToDoItem = ({ todo, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(todo.key)}>
      <View style={styles.todo}>
        <MaterialIcons name="delete" size={18} color='red'/>
        <Text style={styles.text}>{todo.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  todo: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row'
  },
  text : {
    marginLeft: 10,
  }
});

export default ToDoItem;
