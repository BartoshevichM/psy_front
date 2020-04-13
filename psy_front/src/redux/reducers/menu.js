const initialState = {
    isMenuActive: false,
    clsMenu: []
}

export default function menu(state = initialState, action) {
    switch (action.type) {

        case 'OPEN_CLOSE':
            return {
                isMenuActive: !state.isMenuActive,
                clsMenu: state.clsMenu.length > 1 ? [state.clsMenu[0]] : state.clsMenu
            }

        case 'SET_CLS_MENU':
            return {
                isMenuActive: state.isMenuActive,
                clsMenu: action.payload
            }

        case 'SET_ACTIVE_CLS_MENU':
            return {
                isMenuActive: state.isMenuActive,
                clsMenu: action.payload
            }

        default:
            return state
    }
}
