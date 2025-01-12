import { useState } from "react";

interface TodoType {
    todoText: string;
    isEditing: boolean;
}

interface TaskProps {
    onAddTodo: (todo: TodoType) => void;
    onClose: () => void;
}

export default function Task({ onAddTodo, onClose }: TaskProps) {
    const [data, setData] = useState<TodoType>({
        todoText: "",
        isEditing: false,
    });

    function handleTodoForm() {
        if (data.todoText === "") return onClose();
        onAddTodo(data);
        onClose();
        setData({ todoText: "", isEditing: false });
    }
    return (
        <div className="h-fit w-full flex flex-col justify-center items-center my-8 gap-5">
            <div className="form-todo">
                <form
                    method="POST"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleTodoForm();
                    }}
                    className="p-4 space-y-6"
                >
                    <h2>Create a Post</h2>
                    <div className="flex w-full justify-between items-center">
                        <input
                            type="text"
                            className="border px-4 outline-none py-2 rounded-l-md"
                            onChange={(e) =>
                                setData((prev) => ({ ...prev, todoText: e.target.value === "" ? "" : e.target.value }))
                            }
                            value={data.todoText}
                            autoFocus
                            placeholder="Write anything here..."
                        />
                        <button
                            type="submit"
                            className="bg-purple-600 text-white px-4 py-2 rounded-r-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}