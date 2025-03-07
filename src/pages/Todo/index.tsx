import { ActivityIndicator, Button, Text, View } from 'react-native';
import styles from './styles';
import useTodo from '../../hooks/useTodo';
import TodoList from '../../components/TodoList';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React from 'react';

const TodoScreen = () => {

    const navigation = useNavigation();

    const { data, loading, error, getTodoList } = useTodo();

    useFocusEffect(React.useCallback(() => {
        getTodoList();
    }, []));

    const onPressNewTask = () => navigation.navigate('NewTask');

    if(loading){
        return (
            <View style={styles.containerLoading}>
                <ActivityIndicator size={22} color={'skyblue'} />
            </View>
        );
    }

    if(error && error.length > 0){
        return (
         <View style={styles.containerError}>
             <Text>{error}</Text>
        </View>
        );
     }

    return (
        <View style={styles.container} >
            <TodoList items={data} />
            <Button title="New Task" onPress={onPressNewTask}  />
        </View>
    );
};

export default TodoScreen;
