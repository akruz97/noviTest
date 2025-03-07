import { useEffect, useState } from 'react';
import { ICreateItem, ITodoItem } from '../interfaces';


const useTodo = () => {

    const [data, setData] = useState<ITodoItem[] | []>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getTodoList();
    }, []);

    const getTodoList = async () => {

        try {
            setLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const todoData = await res.json();
            setTimeout(() => {
                setData(todoData);
                setLoading(false);
            }, 500);
        } catch (error: any) {
            setLoading(false);
            setError('Failed to get todo list');
            // setError(error?.message);
        }
    };

    const createTask = async (item: ICreateItem) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const dataResponse = await res.json();
            if(dataResponse?.id) {return true;}
            return false;
        } catch (error: any) {
            return false;
        }

    };

    const editTask = async (id: number, item: ICreateItem) => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PUT',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const dataResponse = await res.json();
            console.log(dataResponse);
            if(dataResponse?.id) {return true;}
            return false;
        } catch (error: any) {
            return false;
        }

    };

    return { data, error, loading, createTask, getTodoList, editTask };
};

export default useTodo;
