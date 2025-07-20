const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): typeof initState=> { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID':
                debugger
                return {themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionType = {
    type:string,
    id:number
}
