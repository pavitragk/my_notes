const usersInitialState = {
    data: [],
    isLoading: true
}


const usersReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case 'USERS': {
            return { ...state, data: [action.payload] }
        }
        case 'LOGIN_USERS': {
            return { ...state, data: [action.payload] }
        } case 'USER_ACCOUNT': {
            return { ...state, data: [action.payload] }
        }
        default: {
            return { ...state }
        }

    }

}

export default usersReducer