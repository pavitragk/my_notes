import React from 'react'
import AddNotes from './AddNotes'
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux'
import { startUpdateNote } from '../actions/notesAction';


const EditForm = (props) => {
    const dispatch = useDispatch()
    const { id, title, body, handleToggle } = props

    const formSubmit = (data) => {
        console.log("up", data)

        dispatch(startUpdateNote({ ...data, _id: id }))
        handleToggle()

    }
    return (
        <div>

            <AddNotes formSubmit={formSubmit} id={id} title={title} body={body} />

        </div>
    )
}

export default EditForm