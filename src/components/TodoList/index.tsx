import React from 'react'
import type { ReactElement } from 'react'
import { Todo } from '../Todo'
import type { TodoType } from '../Todo'


interface TodoItemsProps {
    todoItems: TodoType[]
    onUpdate: (todo: TodoType) => void;
    onDelete: (id: string) => void;
}

export const TodoList = (props: TodoItemsProps): ReactElement => {
    const { todoItems, onUpdate, onDelete } = props
    return (
        <ul className="list-group mb-0">
            {todoItems.map(item => {
                return (
                    <Todo
                        key={item.id}
                        todo={item}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />)
            })}
        </ul>
    )
}