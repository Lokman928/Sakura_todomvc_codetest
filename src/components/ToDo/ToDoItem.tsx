import { FC, useState } from "react";
import { todoItem } from "../../types/todo.type";
import { useAppDispatch } from "../../redux/hook";
import { changeIsDone, deleteItem } from "../../redux/slices/todo.slice";

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

    return (
        <div className="join w-full">
            <span
                className={`join-item inline-flex flex-1 items-center border-2 px-3 text-lg font-semibold ${
                    _isDone ? "text-slate-500 line-through decoration-2" : ""
                }`}
            >
                {item.content}
            </span>
            <button
                className="btn btn-secondary join-item h-auto"
                onClick={deleteHandler}
            >
                delete
            </button>
            <button
                className="btn btn-primary join-item h-auto"
                onClick={doneHandler}
            >
                done
            </button>
        </div>
    );
};

export default ToDoItem;
