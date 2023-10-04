import { FC, useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { createItem } from "../../redux/slices/todo.slice";

const ToDoInputField: FC<any> = ({}) => {
    const dispatch = useAppDispatch();

    const [userInput, setUserInput] = useState("");

    const submitHandler = () => {
        if (userInput != "") {
            dispatch(createItem({ content: userInput }));
            setUserInput("");
        }
    };

    return (
        <div className="join w-full py-2">
            <input
                value={userInput}
                className="input join-item input-bordered flex-1"
                placeholder="Item"
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button
                className="btn btn-primary join-item"
                onClick={submitHandler}
            >
                Submit
            </button>
        </div>
    );
};

export default ToDoInputField;
