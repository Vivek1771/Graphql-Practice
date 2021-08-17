import React, { useState, useEffect } from 'react'
import { USER_LOGIN } from '../graphql/mutations/login'
import { useMutation } from '@apollo/client'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Remember, setRemember] = useState(false);

    const [userLogin, { data, error }] = useMutation(USER_LOGIN);
    const toggleConfirm = () => setRemember(Remember => !Remember)

    useEffect(() => {
        if (data) {
            localStorage.setItem('Authorization', data?.userLogin);
        }
    }, [data])

    const loginUser = () => {
        userLogin({
            variables: {
                Email: email,
                Pw: password,
                Remember: Remember
            },
        });
        if (data) {
            console.log(data);
        }
        if (error) {
            console.log(error);
        }

    };

    return (
        <div>
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <br /><br /><br />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            /><br /> <br />
            <input type="radio" id="Remember" onChange={() => toggleConfirm()} />
            <p>Remember Me</p>
            <br />            <br />

            <button onClick={loginUser}> Login </button>
            <br /><br /><br />
        </div>
    )
}

export default Login
