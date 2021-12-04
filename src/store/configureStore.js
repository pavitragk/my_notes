import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'
import myNotesReducer from '../reducers/myNotesReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        notes: myNotesReducer


    }), applyMiddleware(thunk))

    return store
}

export default configureStore