import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MATCH } from "../graphql/queries/getMatch";
import { CLIENT } from '../graphql/subscriptions/getApi'


function GetMatch() {

    const token = localStorage.getItem("AuthorizationFWL")

    const { data, error, loading, fetchMore } = useQuery(GET_MATCH, {
        variables: { Offset: 0, Limit: 10 },
        client: CLIENT,
        context: {
            headers: {
                "Authorization": token
            }
        }

    });
    if (error) return <div>Please login, to see Match Records</div>;
    if (loading || !data) return <div>loading</div>;
    if (data) {
        console.log(data);
    }

    return (
        <>

            {data?.getMatches.map((match, i) =>
                <ul style={{ "listStyle": "none" }} key={i}>
                    <li>{match.eCategory}</li>
                    <li>{match.sName}</li>
                    <li>{match.sVenue}</li>
                </ul>
            )}
            <button
                onClick={() => {

                    fetchMore({
                        variables: { Offset: data.getMatches.length },
                        updateQuery: (prevResult, { fetchMoreResult }) => {
                            fetchMoreResult.getMatches = [
                                ...prevResult.getMatches,
                                ...fetchMoreResult.getMatches
                            ];
                            return fetchMoreResult;
                        }
                    });
                }}
            >
                more
            </button>
        </>
    );
}

export default GetMatch;
