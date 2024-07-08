import { useCallback, useState } from 'react'
import { TodoList } from 'components/TodoList'
import type { ReactElement } from 'react'
import type { TodoType } from 'components/Todo'
import { CreateTodo } from '../components/CreateTodo'
import { FilterNavTabs } from '../components/FilterNavTabs'
import { v4 as uuidv4 } from 'uuid'


const DEFAULT_TODO_LIST = [
    { id: '1', name: 'task 1', completed: false },
    { id: '2', name: 'task 2', completed: false },
    { id: '3', name: 'task 3', completed: true },
]


export type FilterType = 'all' | 'active' | 'completed'


function App(): ReactElement {
    const [todoItems, setTodoItems] = useState<TodoType[]>(DEFAULT_TODO_LIST)
    const [currentFilterName, setCurrentFilterName] = useState<FilterType>('all')

    const onCreate = useCallback((taskName: string) => {
        if (taskName.trim() === '') {
            return
        }
        const newTodo = {
            id: uuidv4(),
            name: taskName,
            completed: false,
        }
        setTodoItems((prev) => [newTodo, ...prev])
    }, [])

    const onUpdate = useCallback((todo: TodoType): void => {
        setTodoItems(prevItems =>
            prevItems.map(item =>
                item.id === todo.id ? {
                    ...item,
                    completed: todo.completed,
                } : item,
            ),
        )
    }, [])

    const onDelete = useCallback((id: string): void => {
        setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, [])


    const filteredTodoItems = todoItems.filter(todo => {
        if (currentFilterName === 'active') return !todo.completed
        if (currentFilterName === 'completed') return todo.completed
        return true
    })


    return (
        <div className="m-auto w-50 mt-lg-5">
            <CreateTodo onCreate={onCreate} />
            <FilterNavTabs currentFilterName={currentFilterName} onFilterChange={setCurrentFilterName} />
            <TodoList todoItems={filteredTodoItems} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default App
