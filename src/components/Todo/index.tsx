import React, { useState } from 'react'
import type { ReactElement } from 'react'
import styles from './index.module.scss'


export interface TodoType {
    id: string,
    name: string,
    completed: boolean,
}

interface TodoProps {
    todo: TodoType
    onUpdate: (todo: TodoType) => void
    onDelete: (id: string) => void;
}

export const Todo = React.memo(function (props: TodoProps): ReactElement {
    const { completed, name, id } = props.todo

    const [isDone, setIsDone] = useState(completed)

    const { onUpdate, onDelete } = props

    const updateHandler = (): void => {
        setIsDone(!isDone)
        onUpdate({ ...props.todo, completed: !isDone })
    }

    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <div className="d-flex align-items-center">
                <input
                    className="form-check-input me-2"
                    checked={isDone}
                    type="checkbox"
                    aria-label="..."
                    onChange={() => {
                        updateHandler()
                    }}
                />
                <span className={isDone ? styles.lineThrough : ''}>
                    {name}
                </span>
            </div>
            <button
                className="btn btn-xs btn-danger"
                onClick={() => {
                    onDelete(id)
                }}
            >
                <i className="fa fa-remove"></i>
            </button>
        </li>
    )
})