const notesInitialState = {
    data: [],
    isLoading: true
}

const myNotesReducer = (state = notesInitialState, action) => {
    switch (action.type) {
        case 'MY_NOTE': {
            // return { ...state }
            return { ...state, data: [...state.data, { ...action.payload }] }
        } case 'GET_NOTE': {
            return { ...state, data: [...action.payload] }

        } case 'DELETE_NOTE': {
            const deletedData = [...state.data].filter((ele) => {
                return ele._id !== action.payload._id
            })
            return { ...state, data: [...deletedData] }

        } case 'UPDATE_NOTE': {
            const result = state.data.map((note) => {
                if (note._id === action.payload._id) {
                    return { ...note, ...action.payload }
                } else {
                    return { ...note }
                }

            })
            return { ...state, data: [...result] }
        }
        default: {
            return { ...state }
        }
    }
}

export default myNotesReducer

