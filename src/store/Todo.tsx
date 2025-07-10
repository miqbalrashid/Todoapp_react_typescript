import { useState, type ReactNode, createContext } from "react";

export type TodoProviderProps = {
    children: ReactNode;
};

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
};

type TodoContextType = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;
};

export const todoContext = createContext<TodoContextType>({
    todos: [],
    handleAddToDo: () => {},
});

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