import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Todo = ({ todo, todoIndex, onDelete }) => {
    return (
        <TouchableOpacity onPress={onDelete} >
            <View style={styles.TodoElement}>
                <Text style={styles.TodoElementIndex}> {todoIndex + 1} </Text>
                <Text style={styles.TodoElementContent}> {todo}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    TodoElement: {
        shadowColor: 'black',
        shadowOpacity: 0.9,
        elevation: 5,
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
        borderColor: '#162447',
        borderTopColor: '#162447',
        backgroundColor: '#e3f6f5',
        borderWidth: 1,
        borderBottomWidth: 4,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: '90%',
        maxWidth: '90%',
        minHeight: 80,
        paddingRight: 30,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    TodoElementContent: {
        color: '#1f4068',
        fontSize: 20,
    },
    TodoElementIndex: {
        marginTop: 7,
        paddingTop: 2,
        color: '#fff',
        backgroundColor: '#e43f5a',
        borderRadius: 9,
        width: 25,
        height: 25,
        textAlign: 'center',
        marginRight: 7
    }
})

export default Todo
