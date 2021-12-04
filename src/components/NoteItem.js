import React, { useState } from 'react'
import AddNotes from './AddNotes'
import swal from 'sweetalert';
import { Button, List, ListItem, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import { startGetNotes, startDeleteNote } from '../actions/notesAction'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateNote } from '../actions/notesAction';



const NoteItem = (props) => {
    const { _id, title, body } = props
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const notes = useSelector((state) => {
        return state.notes.data
    })

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(startDeleteNote(id))
            }

        })
    }

    const showDetail = (id) => {
        const fetchData = notes.find((note) => {
            return id === note._id
        })
        swal({
            title: `title:${fetchData?.title}`,
            text: `body:${fetchData?.body}`,
        })
    }

    const handleToggle = (id) => {
        const result = !toggle
        setToggle(result)


    }

    const handleEditSubmit = (data) => {

        dispatch(startUpdateNote({ ...data, _id: _id }))
        handleToggle()

    }


    return (
        <div>
            {toggle ? (
                <div>
                    <AddNotes formSubmit={handleEditSubmit} title={title} body={body} />
                    <button onClick={handleToggle}>cancel</button>
                </div>
            ) : (
                <div>
                    <Container style={{ border: "1px solid black" }}>
                        <ListItem onClick={() => {
                            showDetail(_id)
                        }} >{title}</ListItem>
                        <Button variant="contained" color="primary" onClick={() => {
                            handleDelete(_id)
                        }}>Delete</Button>
                        <Button variant="contained" color="secondary" onClick={() => {
                            handleToggle(_id)
                        }}>Edit</Button>
                    </Container>
                </div>

            )}

        </div>
    )

}
export default NoteItem