import React from 'react';
import { ITodoItem } from '../../interfaces';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TodoItem = (item: ITodoItem) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('NewTask', {
            task: item,
        });
    };

    return(
        <TouchableOpacity key={item.id}  style={styles.container} onPress={onPress} >
           <Text>{item.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 15,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
    },
});

export default TodoItem;
