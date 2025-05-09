import styles from './TodoItem.module.css';

export default function TodoItem({ title, isCompleted, statusChangeHandler, todoId }) {
    console.log(isCompleted);

    const todoStyles = [styles['todo']];

    if (isCompleted) {
        todoStyles.push(styles['completed']);
    }

    return (
        <li className={todoStyles.join(' ')} onClick={() => statusChangeHandler(todoId)}>
            {title} : {isCompleted ? 'completed' : 'not completed'}

        </li>
    );
}
