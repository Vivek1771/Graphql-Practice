import React from 'react'
import { SUBSCRIPTION } from '../graphql/subscriptions/getApi'
import { useSubscription } from '@apollo/client'

function Sub() {


    const { data, loading, error } = useSubscription(SUBSCRIPTION);


    if (error) {
        console.log(error)
    }

    return null
}

export default Sub;
