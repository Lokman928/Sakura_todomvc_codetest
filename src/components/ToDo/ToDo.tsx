import { FC } from "react";
import ToDoInputField from "./ToDoInputField";
import ToDoItem from "./ToDoItem";
import { useAppSelector } from "../../redux/hook";
import { todoItem } from "../../types/todo.type";

interface ToDoProps {
    className?: string;
}

const ToDo: FC<ToDoProps> = ({ className = "" }) => {
    const item = useAppSelector((state) => state.todo.items);

    console.debug(item);
    return (
        <div className={`${className}`}>
            <div className="">
                <ToDoInputField />
            </div>
            <div className="flex flex-col gap-1">
                {item.map((value: todoItem) => {
                    return <ToDoItem item={value} key={value.id} />;
                })}
            </div>
        </div>
    );
};

export default ToDo;
