import {combineReducers, legacy_createStore as createStore} from "redux";
import {settingCounterReducer} from "./settingCounterReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {loadState, saveState} from "./localStorege";
import {throttle} from "lodash";

export const rootReducer = combineReducers({
    numControl:settingCounterReducer,

});
const persistedState = loadState();

export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState({
        numControl: store.getState().numControl})
});

store.subscribe(throttle(() => {
    saveState({
        numControl: store.getState().numControl
    });
}, 1000));

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector


