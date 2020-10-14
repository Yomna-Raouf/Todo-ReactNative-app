import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const TodoInput = ({ addTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState('');

    const InputHandler = (enteredText) => {
        setEnteredTodo(enteredText)
    }

    return (
        <View style={styles.inputContainer} >
            <TextInput
                placeholder="Your Todos"
                style={styles.input}
                value={enteredTodo}
                onChangeText={InputHandler}
            />
            <Button color='#162447' title="ADD" onPress={() => {
                addTodo(enteredTodo);
                setEnteredTodo('');
                console.log(enteredTodo);
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        padding: 50,
    },
    input: {
        borderBottomColor: '#162447',
        borderBottomWidth: 2,
        marginBottom: 8,
        padding: 10,
        flexGrow: .8,
        color: '#1b1b2f',
        fontSize: 20,
    },
})

export default TodoInput
