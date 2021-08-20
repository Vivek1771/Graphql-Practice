import React from 'react'
import { SUBSCRIPTION } from '../graphql/subscriptions/getApi'
import { useSubscription } from '@apollo/client'
import { CLIENT } from "../graphql/subscriptions/getApi"

function Sub() {

    const token = localStorage.getItem("AuthorizationFWL")


    const { data, loading, error } = useSubscription(SUBSCRIPTION, {
        client: CLIENT,
        context: {
            headers: {
                "Authorization": token
            }
        }
    });


    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data);
    }
    if (loading) {
        <p>Loading...</p>
    }

    return null
}

export default Sub;
