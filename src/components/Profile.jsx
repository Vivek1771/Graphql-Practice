import React, { useEffect, useState } from 'react'

import { USER_PROFILE } from '../graphql/queries/getUser'
import { useQuery } from '@apollo/client';
// import { GET_RECORDS } from '../graphql/queries/getRecords'


function Profile() {

    const [showProfile, setShowProfile] = useState(false)
    const toggleConfirm = () => setShowProfile(showProfile => !showProfile)


    const token = localStorage.getItem("Authorization")
    // const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpVXNlcklkIjoiNjA1ODM3NWI3MmUzN2U2NjVmMGNkZmFmIiwiZVVzZXJUeXBlIjoidXNlciIsImlhdCI6MTYyOTA5Nzk4MH0.Jfjo4BQSvyiCrBK-upf81qwhjH8xwGfLHyFmFITfjRk"

    const { loading: profile_loading, error: profile_error, data: profile_data, refetch } = useQuery(USER_PROFILE, {
        context: {
            headers: {
                "Authorization": token
            }
        },
        // fetchPolicy: "cache-and-network",
        // pollInterval: 2000
    })

    // const { loading: records_loading, error: records_error, data: records_data } = useQuery(GET_RECORDS, {
    //     context: {
    //         headers: {
    //             "Authorization": token2
    //         }
    //     }
    // })


    // useEffect(() => {
    //     if (records_data) {
    //         console.log("profile_data", records_data);
    //     }
    // }, [records_data])


    if (profile_loading) return <p>Loading...</p>;
    if (profile_error) return <p>Not Authorized..Please Login & Refresh the page...</p>;

    // if (records_loading) return <p>Loading...</p>;
    // if (records_error) return <p>Error</p>;


    return (
        <div>
            {/* <button onClick={() => getUser()}>Lazy Query Call</button> */}
            <br />
            <button onClick={() => toggleConfirm()}>Show Profile</button>
            {
                showProfile && (
                    <>
                        <p>Email: {profile_data.getProfiles.sEmail}</p>
                        <p>FirstName: {profile_data.getProfiles.sFirstName}</p>
                    </>
                )
            }
            <br />

            <button onClick={() => refetch()}>Refetch!</button>
            {/* <p>Records:</p>
            <p>{records_data.getRecords.records.map((rc, i) =>
                <ul style={{ "listStyle": "none" }}>
                    <li>{i + 1}. Title: {rc.sTitle}</li>
                    <li>Description: {rc.sDescription}</li>
                    <li>Location: {rc.sLocation}</li>
                </ul>

            )}</p> */}
        </div>
    )
}


export default Profile;

