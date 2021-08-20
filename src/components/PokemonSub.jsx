import React from "react";
import { useSubscription } from "@apollo/client";
import { client, POKEMON } from '../graphql/subscriptions/pokemon'



const Pokemon = () => {
    const { data, loading } = useSubscription(
        POKEMON,
        client
    );

    if (data) {
        console.log("pokimon", data);
    }

    return null;
};

export default Pokemon;