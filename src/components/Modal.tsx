import Task from "./Task";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { Delete, Edit2Icon } from "lucide-react";

interface TodoType {
    todoText: string;
    isEditing: boolean;
}

export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [editText, setEditText] = useState("");

    const handleAddTodo = (todo: TodoType) => {
        setTodos(prev => [...prev, todo]);
    };

    const deleteTodo = (idx: number) => {
        setTodos(todos.filter((todo, index) => index !== idx));
    };

    const toggleEdit = (idx: number) => {
        setTodos((prevTodos) => {
            const newTodos = prevTodos.map((todo, index) =>
                index === idx ? { ...todo, isEditing: !todo.isEditing } : todo
            );
            setEditText(prevTodos[idx].todoText);
            return newTodos;
        });
    };

    const editTodo = (idx: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, index) =>
                index === idx ? { ...todo, todoText: editText, isEditing: false } : todo
            )
        );
    };

    return (
        <>
            <div className="flex flex-wrap gap-3 flex-col justify-center items-center">
                <h1 className="text-4xl my-4">Share your posts</h1>
                <Button onPress={onOpen}>Create a Post</Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-gray-600">Write Something</ModalHeader>
                            <ModalBody className="text-black">
                                <Task onAddTodo={handleAddTodo} onClose={onClose} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <div className="w-full flex flex-col justify-center items-center my-4">
                <ul className="list-none">
                    {todos.map((todo, idx) => (
                        <motion.li
                            key={idx}
                            className="flex gap-4 items-center my-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                            {todo.isEditing ? (
                                <motion.input
                                    type="text"
                                    defaultValue={todo.todoText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && editTodo(idx)}
                                    className="border px-4 outline-none py-2 text-black border-blue-400 rounded-md"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            ) : (
                                <motion.p
                                    className="w-1/2"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {todo.todoText}
                                </motion.p>
                            )}
                            <motion.button
                                type="button"
                                className="bg-green-500 px-2 py-2 rounded-md text-white transition-colors duration-300 ease hover:bg-green-600"
                                onClick={() => toggleEdit(idx)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Edit2Icon className="text-xs" size={18} />
                            </motion.button>
                            <motion.button
                                type="button"
                                className="bg-red-500 px-2 py-2 rounded-md text-white transition-colors duration-300 ease hover:bg-red-600"
                                onClick={() => deleteTodo(idx)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Delete className="text-xs" size={18} />
                            </motion.button>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </>
    );
}

