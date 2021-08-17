import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY, CLIENT } from "../graphql/queries/getWeather";

function Weather() {
    const [citySearched, setCitySearched] = useState("");
    const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: { name: citySearched },
        client: CLIENT,
        errorPolicy: "none",
        // fetchPolicy: "cache-only"
    },
    );

    if (error) return <h1> Error found</h1>;

    if (data) {
        console.log(data);
    }

    return (
        <div>
            <h2>City Weather Info</h2>
            <h4>Search here:</h4>
            <input
                type="text"
                placeholder="City name..."
                onChange={(event) => {
                    setCitySearched(event.target.value);
                }}
            />
            <button onClick={() => getWeather()}> Search</button>
            <div className="weather">
                {data?.getCityByName && (
                    <>
                        <h1> {data.getCityByName.name} </h1>
                        <h1>
                            {" "}
                            Temperature: {data.getCityByName.weather.temperature.actual}
                        </h1>
                        <h1>
                            Description: {data.getCityByName.weather.summary.description}
                        </h1>
                        <h1>Wind Speed: {data.getCityByName.weather.wind.speed}</h1>
                    </>
                )}
            </div>
        </div>
    );
}

export default Weather;
