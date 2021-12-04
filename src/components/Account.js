import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startUserAccount } from '../actions/usersAction'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@mui/material';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const Account = () => {
    const dispatch = useDispatch()


    const user = useSelector((state) => {
        return state.users.data
    })

    console.log("user", user)

    useEffect(() => {
        dispatch(startUserAccount())
    }, [])


    return (
        <Container component="main" maxWidth="xs">
            <div >
                <h1>User account</h1>
                <p > email - {user[0]?.email}</p>
                <p > username - {user[0]?.username}</p>
            </div >
        </Container >
    )
}

export default Account