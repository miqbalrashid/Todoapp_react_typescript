import { useState, type ReactNode } from "react";


export type TodoProviderProps = {
    children: ReactNode;
};

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddToDo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date(),
                },
                ...prev,
            ];
            return newTodos;
        });
    };

    return (
        <todoContext.Provider value={{ todos, handleAddToDo }}>
            {children}
        </todoContext.Provider>
    );
};