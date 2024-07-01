export const datatypes = {
    SET_AUTHENTICATED: 'SET_AUTENTICATED',
    SET_OPEN_MENU_LATERAL: 'SET_OPEN_MENU_LATERAL'
}

export const set_authenticated = authenticated => {
    return {
        authenticated,
        type: datatypes.SET_AUTHENTICATED
    }
}

export const set_open_menu_lateral = open_menu_lateral => {
    return {
        open_menu_lateral,
        type: datatypes.SET_OPEN_MENU_LATERAL
    }
}