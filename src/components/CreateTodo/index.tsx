import React, { useState } from 'react'
import type { FormEvent, ReactElement } from 'react'

interface CreateTodoProps {
    onCreate: (taskName: string) => void;
}


export const CreateTodo = (props: CreateTodoProps): ReactElement => {
    const { onCreate } = props
    const [taskName, setTaskName] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTaskName(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        onCreate(taskName)
        setTaskName('')
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center mt-4 mb-4">
            <div className="form-floating flex-fill">
                <input onChange={handleInputChange} value={taskName} placeholder="Task goes here"
                       className="form-control" type="text" id="form2" />
                <label className="form-label" htmlFor="form2">New task...</label>
            </div>
            <button type="submit" className="btn btn-info ms-2">Add</button>
        </form>
    )
}