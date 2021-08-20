import React, { useState, useEffect } from 'react'
import { FWL_USER_LOGIN } from '../graphql/mutations/fwLogin'
import { useMutation } from '@apollo/client'
import { CLIENT, SUBSCRIPTION } from '../graphql/subscriptions/getApi'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userLogin, { data, error }] = useMutation(FWL_USER_LOGIN, {
        client: CLIENT,
        refetchQueries: [
            SUBSCRIPTION,
            'getApi'
        ]
    });

    useEffect(() => {
        if (data) {
            localStorage.setItem('AuthorizationFWL', data?.userLogin);
        }
    }, [data])

    const loginUser = () => {
        userLogin({
            variables: {
                Email: email,
                Pw: password,
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
            <h5>email: 7878787878</h5>
            <h5>password: 12345</h5>
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
            <button onClick={loginUser}> Login </button>
            <br /><br /><br />
        </div>
    )
}

export default Login
