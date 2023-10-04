import { Action, Store } from "redux";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./slices/todo.slice";

const persistConfig = {
    key: "root",
    storage,
};

const store: Store = configureStore({
    reducer: {
        todo: persistReducer(persistConfig, todoReducer),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
