import { FlatList } from 'react-native';
import { ITodoItem } from '../../interfaces';
import TodoItem from '../TodoItem';


interface TodoListProps {
    items: ITodoItem[]
}

const TodoList = ({ items = [] } : TodoListProps) => {

    const renderItem = ({item, index} : { item: ITodoItem, index: number }) => {
        return <TodoItem {...item} key={index.toString()} />;
    };

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default TodoList;
