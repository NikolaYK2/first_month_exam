export type InitialiseStateType = {
    startValue: number,
    maxValue: number,
    num: number,
    disabledSet: boolean,
    textDisplay: string,

}

const initialiseState: InitialiseStateType = {
    startValue: 0,
    maxValue: 1,
    num: 0,
    disabledSet: false,
    textDisplay: 'Go bro!',
}

export const settingCounterReducer = (state = initialiseState, action: Actions): InitialiseStateType => {
    switch (action.type) {
        case 'INCREASE': {
            return {...state, num: state.num + 1};
        }
        case 'RESET': {
            return {...state, num: state.startValue};
        }
        case 'SET_NUM': {
            return {...state, num: state.startValue}
        }
        case 'SET_START': {
            return {...state, startValue: action.payload.newValue}
        }
        case 'SET_MAX': {
            return {...state, maxValue: action.payload.newValue}
        }
        case 'SET_DISABLE': {
            return {...state, disabledSet: action.payload.switching}
        }
        case 'TEXT_DISPLAY': {
            return {...state, textDisplay: action.payload.text}
        }
        default:
            return state
    }
}


type Actions = NumPlusACType
    | NumResetACType
    | SetNumACType
    | SetStartACType
    | SetMaxACACType
    | SetDisableACType
    | SetTextDisplayACType;

type NumPlusACType = ReturnType<typeof numPlusAC>
export const numPlusAC = () => {
    return {
        type: 'INCREASE',
    } as const
}

type NumResetACType = ReturnType<typeof numResetAC>
export const numResetAC = () => {
    return {
        type: 'RESET',
    } as const
}

type SetNumACType = ReturnType<typeof setNumAC>
export const setNumAC = (newValue: number) => {
    return {
        type: 'SET_NUM',
        payload: {
            newValue,
        }
    } as const
}
type SetStartACType = ReturnType<typeof setStartAC>
export const setStartAC = (newValue:number) => {
    return {
        type: 'SET_START',
        payload: {
            newValue,
        }
    } as const
}
type SetMaxACACType = ReturnType<typeof setMaxAC>
export const setMaxAC = (newValue: number) => {
    return {
        type: 'SET_MAX',
        payload: {
            newValue,
        }
    } as const
}

type SetDisableACType = ReturnType<typeof setDisableAC>
export const setDisableAC = (switching:boolean) => {
    return {
        type: 'SET_DISABLE',
        payload:{
            switching,
        }
    } as const
}

type SetTextDisplayACType = ReturnType<typeof setTextDisplayAC>
export const setTextDisplayAC = (text:string) => {
    return {
        type: 'TEXT_DISPLAY',
        payload: {
            text
        }
    } as const
}