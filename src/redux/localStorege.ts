import {AppStateType} from "./store";

export const saveState = (state:AppStateType) => {
    try {
        const strState = JSON.stringify(state);
        localStorage.setItem('state', strState);
    } catch {
        // ignore write errors
    }
};
export const loadState = () => {
    try {
        const strState = localStorage.getItem('state');
        if (strState === null) {
            return undefined;
        }
        return JSON.parse(strState);
    } catch (err) {
        return undefined;
    }
};