import axios from 'axios'
export const startUserRegister = (formData, props) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register', formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    // console.log(result)
                    dispatch(setUser(result))

                    alert('created an user account')
                    props.history.push('/login')
                }

            })
            .catch((error) => {
                console.log(error.message)


            })


    }
}

export const setUser = (result) => {

    return {
        type: 'USERS',
        payload: result

    }

}

export const startUserLogin = (formData, props) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {

                    dispatch(setLogin(formData))
                    alert('successfully logged in')
                    localStorage.setItem('token', result.token)
                    props.history.push('/')
                    props.handleAuth()

                }

            })
            .catch((res) => {
                alert(res.message)
            })

    }
}

export const setLogin = (formData) => {
    return {
        type: 'LOGIN_USERS',
        payload: formData


    }


}

export const startUserAccount = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((res) => {
                const result = res.data
                // console.log("res", result)
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {

                    dispatch(setAccount(result))


                }

            })
            .catch((res) => {
                alert(res.message)
            })

    }
}

export const setAccount = (userData) => {
    return {
        type: 'USER_ACCOUNT',
        payload: userData



    }


}







