import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { myNotes } from '../actions/usersAction'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Container from '@material-ui/core/Container';
import { startAddNote, startUpdateNote } from '../actions/notesAction';


const AddNotes = (props) => {
    const { id, title: noteTitle, body: noteBody, formSubmit, toggle, handleToggle } = props


    const [title, setTitle] = useState(noteTitle ? noteTitle : "")
    const [body, setBody] = useState(noteBody ? noteBody : "")

    const handleChange = (e) => {
        if (e.target.name == "title") {
            setTitle(e.target.value)
        } else if (e.target.name == "body") {
            setBody(e.target.value)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {

            title: title,
            body: body
        }
        formSubmit(formData)
        // dispatch(startAddNote(formData))
        // dispatch(startUpdateNote({ ...formData, _id: id }))
        setTitle("")
        setBody("")

    }
    return (

        <div>
            <h1>Add your notes here</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Add your note" variant="outlined" value={title} name="title" onChange={handleChange} />
                <br />
                <br />
                <TextareaAutosize
                    minRows={3}
                    aria-label="maximum height"
                    value={body} name="body" onChange={handleChange}
                /><br />
                <Button variant="contained" color="secondary" type="submit">Add</Button>
            </form>
        </div >

    )
}

export default AddNotes