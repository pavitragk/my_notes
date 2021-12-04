import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetNotes, startDeleteNote } from '../actions/notesAction'
import swal from 'sweetalert';
import EditForm from './EditForm';
import Container from '@material-ui/core/Container';
import { Button, List, ListItem, Typography } from '@material-ui/core'
import AddNotes from './AddNotes';
import NoteItem from './NoteItem';



const MyNotes = () => {

    const dispatch = useDispatch()
    const notes = useSelector((state) => {
        return state.notes.data
    })

    useEffect(() => {
        dispatch(startGetNotes())
    }, [])

    return (

        <div>
            <Typography>My notes</Typography>
            <List>
                {notes.map((note) => {
                    return (<NoteItem key={note._id} {...note} />
                    )
                })}
            </List>

        </div >


    )
}

export default MyNotes