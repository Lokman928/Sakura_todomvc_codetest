import { FC, useEffect, useId, useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { createItem } from "../../redux/slices/todo.slice";
import { TextInput, Button } from "flowbite-react";

const ToDoInputField: FC<any> = ({}) => {
    const dispatch = useAppDispatch();
    const [userInput, setUserInput] = useState<string>("");

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            submitHandler();
        }
    };

    const submitHandler = () => {
        if (userInput) {
            dispatch(createItem({ content: userInput }));
            setUserInput("");
        }
    };

    return (
        <div className="flex gap-1 py-2">
            <TextInput
                className="flex-1"
                placeholder="item"
                sizing="md"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button color="blue" size="md" onClick={submitHandler}>
                <svg
                    className="h-4 w-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 5h8m-1-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2m6 0h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m0 9.464 2.025 1.965L12 9.571"
                    />
                </svg>
            </Button>
        </div>
    );
};

export default ToDoInputField;
