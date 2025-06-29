import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
             const stateSorted = [...state]
            if(action.payload === 'up') {
                return stateSorted.sort((a, b) =>
                    a.name.localeCompare(b.name, 'ru'))
            } else {
                return stateSorted.sort((a, b) =>
                    a.name.localeCompare(b.name, 'ru')).reverse()
            }

        }
        case 'check': {

            return state.filter(el=>el.age>+action.payload) // need to fix
        }
        default:
            return state
    }
}
