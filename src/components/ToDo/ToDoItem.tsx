import { FC, useState } from "react";
import { todoItem } from "../../types/todo.type";
import { useAppDispatch } from "../../redux/hook";
import { changeIsDone, deleteItem } from "../../redux/slices/todo.slice";
import { Button } from "flowbite-react";

interface ToDoItemProps {
    item: todoItem;
}

const ToDoItem: FC<ToDoItemProps> = ({ item }: { item: todoItem }) => {
    const dispatch = useAppDispatch();
    const [_isDone, _setDone] = useState<boolean>(item.isDone);

    const doneHandler = () => {
        _setDone((prevState) => !prevState);
        dispatch(changeIsDone({ id: item.id }));
    };

    const deleteHandler = () => {
        dispatch(deleteItem({ id: item.id }));
    };

    // inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400

    return (
        <div className="flex flex-wrap gap-1">
            <div
                className={`flex-1 items-center border-2 px-3 py-2.5 text-sm font-semibold ${
                    _isDone ? "text-slate-500 line-through decoration-2" : ""
                }`}
            >
                {item.content}
            </div>
            <Button color="failure" onClick={deleteHandler}>
                <svg
                    className="h-4 w-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                    />
                </svg>
            </Button>
            <Button color="blue" onClick={doneHandler}>
                <svg
                    className="h-4 w-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M1 5.917 5.724 10.5 15 1.5"
                    />
                </svg>
            </Button>
        </div>
    );
};

export default ToDoItem;
