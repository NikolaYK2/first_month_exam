import {combineReducers, legacy_createStore as createStore} from "redux";
import {settingCounterReducer} from "./settingCounterReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const rootReducer = combineReducers({
    numControl:settingCounterReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector