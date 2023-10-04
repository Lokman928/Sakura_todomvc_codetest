import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todoItem } from "../../types/todo.type";

import { v4 as uuid } from "uuid";

interface todoState {
    items: Array<todoItem>;
}

const initialState: todoState = {
    items: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createItem: (state, { payload }: { payload: { content: string } }) => {
            const newItem: todoItem = {
                id: uuid(),
                content: payload.content,
                isDone: false,
            };

            state.items.push(newItem);
        },
        changeIsDone: (state, { payload }: { payload: { id: string } }) => {
            let _itemList = state.items;
            const index = _itemList.findIndex((value: todoItem) => {
                return value.id == payload.id;
            });

            _itemList[index].isDone = !_itemList[index].isDone;

            state.items = _itemList;
        },

        deleteItem: (state, { payload }: { payload: { id: string } }) => {
            let _itemList = state.items;
            const index = _itemList.findIndex((value: todoItem) => {
                return value.id == payload.id;
            });

            _itemList.splice(index, 1);

            state.items = _itemList;
        },
    },
    extraReducers: (builder) => {},
});

export const { createItem, changeIsDone, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
