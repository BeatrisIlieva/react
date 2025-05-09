import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import Spinner from './Spinner/Spinner';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(result => {
                setTodos(result);
                setIsPending(false);
            })
            .catch(err => console.log(err.message));
    }, []);

    const statusChangeHandler = todoId => {
        const todo = todos.find(todo => todo.id == todoId);

        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'PUT',
            'Content-Type': 'application/json',
            body: todo
        })
            .then(response => response.json())
            .then(result =>
                setTodos(oldTodos =>
                    oldTodos.map(todo =>
                        todo.id == todoId ? { ...todo, completed: !todo.completed } : todo
                    )
                )
            )
            .catch(err => console.log(err.message));
    };

    return (
        <>
            {isPending && <Spinner />}

            <br />
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todoId={todo.id}
                        title={todo.title}
                        isCompleted={todo.completed}
                        statusChangeHandler={statusChangeHandler}
                    />
                ))}
            </ul>
        </>
    );
}
