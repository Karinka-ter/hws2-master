const initState = {
    isLoading: false,
}


export const loadingReducer = (state = initState, action: LoadingActionType)=> { // fix any
    switch (action.type) {
        case('CHANGE_LOADING'):
            return {isLoading: action.isLoading}
        default:
            return {isLoading: state.isLoading}
    }
}


type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
