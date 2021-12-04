import axios from 'axios'
export const startAddNote = (note) => {
    return (dispatch) =>
        axios.post('https://dct-user-auth.herokuapp.com/api/notes', note, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log("note", result)
                dispatch(myNote(result))
            })
            .catch((response) => {
                alert(response.message)

            })

}

export const myNote = (note) => {
    return {
        type: 'MY_NOTE',
        payload: note

    }
}

export const startGetNotes = (note) => {
    return (dispatch) =>
        axios.get('https://dct-user-auth.herokuapp.com/api/notes', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((res) => {
                const result = res.data
                dispatch(getNote(result))
            })
            .catch((err) => {
                alert(err.message)
            })

}

export const getNote = (note) => {

    return {
        type: 'GET_NOTE',
        payload: note

    }
}

export const startDeleteNote = (id) => {

    return (dispatch) => axios.delete(`https://dct-user-auth.herokuapp.com/api/notes/${id}`, {
        headers: {
            'x-auth': localStorage.getItem('token')
        }

    }).then((response) => {
        const result = response.data
        dispatch(deleteNote(result))

    })

}

export const deleteNote = (note) => {

    return {
        type: 'DELETE_NOTE',
        payload: note

    }
}

export const startUpdateNote = (formData) => {

    return (dispatch) => axios.put(`https://dct-user-auth.herokuapp.com/api/notes/${formData._id}`, formData, {
        headers: {
            'x-auth': localStorage.getItem('token')
        }

    }).then((response) => {
        const result = response.data
        dispatch(updateNote(result))

    })

}

export const updateNote = (note) => {

    return {
        type: 'UPDATE_NOTE',
        payload: note

    }
}


