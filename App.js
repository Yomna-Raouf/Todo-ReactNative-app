import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList
}
  from 'react-native';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';

export default function App() {


  const [Todos, setTodos] = useState([]);



  const addTodoHandler = (TodoContent) => {
    setTodos(Todos => [
      ...Todos,
      {
        id: Math.random().toString(),
        value: TodoContent
      }
    ]);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ flex: 1 }}>
        <View style={styles.screenTitleContainer}>
          <Text style={styles.screenTitle}>
            Things Todo
          </Text>
        </View>

        <TodoInput addTodo={addTodoHandler} />
        { /* Better than the scroll view in terms of performance */}
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={Todos}
          renderItem={itemData => (
            <Todo onDelete={() => console.log("delete")} todo={itemData.item.value} todoIndex={itemData.index} />
          )}
          contentContainerStyle={{ alignItems: 'center' }}
        />

        {/*  <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          {Todos.map((Todo, index) => (
            <View style={styles.TodoElement} key={index}>
              <Text style={styles.TodoElementIndex}> {index + 1} </Text>
              <Text style={styles.TodoElementContent}> {Todo}</Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
  },
  screenTitleContainer: {
    backgroundColor: '#1f4068',
    width: '100%',
    padding: 0,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
  },
  screenTitle: {
    paddingTop: 50,
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    marginBottom: 15,
  },
});









