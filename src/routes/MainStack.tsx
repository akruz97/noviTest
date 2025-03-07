import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';
import TodoScreen from '../pages/Todo';
import { StyleSheet, Text, View } from 'react-native';
import NewTask from '../pages/NewTask';


const Stack = createStackNavigator();

const CustomHeader = ({ title }: {title: string }) => {
   return (
    <View style={styles.containerTitle} >
        <Text style={styles.title} >{title}</Text>
    </View>
   );
};

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            header: (props: StackHeaderProps) => <CustomHeader {...props} title={props.route.name} />,
        }} >
            <Stack.Screen component={TodoScreen} name="TodoScreen" />
            <Stack.Screen component={NewTask} name="NewTask" />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    containerTitle: {
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MainStack;
