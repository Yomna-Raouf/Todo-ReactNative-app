import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredTodo, setEnteredTodo] = useState('');
  const [Todos, setTodos] = useState([]);

  const InputHandler = (enteredText) => {
    setEnteredTodo(enteredText)
  }

  const addTodoHandler = () => {
    setTodos(Todos => [...Todos, enteredTodo]);
    console.log(Todos);
    setEnteredTodo('');
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput
          placeholder="Your Todos"
          style={styles.input}
          value={enteredTodo}
          onChangeText={InputHandler}
        />
        <Button title="ADD" onPress={addTodoHandler} />
      </View>
      <View>
        {Todos.map((Todo, index) => <Text key={index}>{Todo}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 8,
    padding: 10,
    flexGrow: .8
  }
});









