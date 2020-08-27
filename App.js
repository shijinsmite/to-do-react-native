import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import Form from './components/Form';

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'buy tea',
      key: '1',
    },
    {
      text: 'learn grid',
      key: '2',
    },
    {
      text: 'learn flex',
      key: '3',
    },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.key !== key);
    });
  };

  const toDoList = ({ item }) => (
    <ToDoItem todo={item} pressHandler={pressHandler} />
  );

  const addToDo = (text) => {
    if (text.length > 3) {
      setTodos((prevTodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert('OOPs', 'please bro', [{ text: 'understood' }]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form addToDo={addToDo} />
          <View style={styles.list}>
            <FlatList data={todos} renderItem={toDoList} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
