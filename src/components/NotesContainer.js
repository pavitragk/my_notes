import React from 'react'
import AddNotes from './AddNotes'
import MyNotes from './MyNotes'
import { useDispatch } from 'react-redux'
import { startAddNote } from '../actions/notesAction'
import { Container, Grid } from '@mui/material'
import '../style.css'


const NotesContainer = (props) => {
    const dispatch = useDispatch()
    const formSubmit = (data) => {
        console.log("notecont", data)
        dispatch(startAddNote(data))
    }

    return (

        <Container>
            <Grid container spacing={2} className='gridContainer'>
                <Grid item xs={12} md={8}>
                    <AddNotes formSubmit={formSubmit} />
                </Grid>
                <Grid item>
                    <MyNotes />
                </Grid>
            </Grid>
        </Container>

    )

}

export default NotesContainer