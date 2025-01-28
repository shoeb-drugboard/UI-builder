import React, { useState } from 'react';
import useTodoStore from './State/TodoStore';
import { Input, Button, Checkbox, Card, CardBody } from "@nextui-org/react";

const TodoList: React.FC = () => {
    const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <Card className="max-w-xl mx-auto mt-8 p-4">
            <CardBody>
                <div className="flex gap-2 mb-6">
                    <Input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new todo"
                        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                        className="flex-1"
                    />
                    <Button
                        color="secondary"
                        onClick={handleAddTodo}
                    >
                        Add Todo
                    </Button>
                </div>

                <div className="space-y-3">
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="flex items-center justify-between p-3 bg-content2 rounded-lg"
                        >
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    isSelected={todo.completed}
                                    onValueChange={() => toggleTodo(todo.id)}
                                />
                                <span className={todo.completed ? 'line-through text-gray-400' : 'text-gray-900'}>
                                    {todo.text}
                                </span>
                            </div>
                            <Button
                                color="danger"
                                size="sm"
                                variant="ghost"
                                className="font-semibold"
                                onClick={() => removeTodo(todo.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default TodoList;