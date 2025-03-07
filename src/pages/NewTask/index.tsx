import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import useTodo from '../../hooks/useTodo';
import { useNavigation } from '@react-navigation/native';

const NewTask = ({
    route,
}) => {

    const editParams = route.params?.task || null;
    const isEdit = route.params?.task || false;

    const [name, setName] = useState<string>('');

    const { createTask, editTask } = useTodo();

    const navigation = useNavigation();

    useEffect(() => {
        if(editParams){
            setName(editParams?.title);
        }
    }, [editParams]);

    const onSave = async () => {
        const data = await createTask({
            title: name,
            userId: 1,
            body: '',
        });

        if(data){
            return Alert.alert('', 'Task created', [
                {
                    onPress: () => {
                        navigation.goBack();
                    },
                },
            ]);
        }

        return Alert.alert('', 'Error at created task');
    };

    const onEdit = async () => {
        const data = await editTask(editParams?.id, {
            title: name,
            userId: 1,
            body: '',
        });

        if(data){
            return Alert.alert('', 'Task edited', [
                {
                    onPress: () => {
                        navigation.goBack();
                    },
                },
            ]);
        }

        return Alert.alert('', 'Error at edit task');
    };

    const onChangeName = (val: string) => setName(val);

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title} >{'Title'}</Text>
                <TextInput value={name} onChangeText={onChangeName} style={styles.input} />
            </View>
            <Button title={isEdit ? 'Save Changes' : 'Save Task'}
                    onPress={isEdit ? onEdit : onSave}  />
        </View>
    );
};

export default NewTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    body: {
        flex: 1,

        padding: 10,
    },
    title: {
        marginVertical: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    input: {
        borderBottomWidth: 1,
    },
});
