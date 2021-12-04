import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import NotesContainer from './NotesContainer'
import Account from './Account'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import '../style.css'
import { Typography } from '@mui/material'


const NavBar = (props) => {
    const { isUserLoggedIn, handleAuth } = props
    return (
        <div>
            <Toolbar className="toolbar">
                <Typography style={{ flexGrow: 1 }} variant="h4" className="toolbartitle" >User authentication</Typography>
                <Button><Link to="/"> Home</Link></Button>
                {isUserLoggedIn ? (
                    <><Button color="inherit"><Link to="/account">Account</Link></Button>
                        <Button color="inherit">
                            <Link onClick={() => {
                                localStorage.clear()
                                alert("successfully logged out")
                                handleAuth()
                                props.history.push("/")
                                console.log(localStorage)
                            }} to="#">Logout</Link></Button>
                        <Button color="inherit">
                            <Link to="/notes">notes</Link>
                        </Button>
                    </>)
                    : (
                        <>
                            <Button color="inherit">
                                <Link to="/register">Register</Link>

                            </Button>
                            <Button color="inherit">
                                <Link to="/login">Login</Link>
                            </Button>
                        </>

                    )
                }

            </Toolbar>


            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} />
            <Route path="/login" render={(props) => {
                return <Login
                    {...props}
                    handleAuth={handleAuth}
                />

            }} />
            <Route path="/account" component={Account} />
            <Route path="/notes" component={NotesContainer} exact={true} />


        </div>
    )

}

export default withRouter(NavBar)