const initState = {
    isLoading: false,
}


export const loadingReducer = (state:Initial = initState, action: LoadingActionType): any => { // fix any
    switch (action.type) {
        case('CHANGE_LOADING'):
         return action.isLoading
        default:
            return state.isLoading
    }
}
export type Initial ={
    isLoading: boolean
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
