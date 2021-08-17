import React from "react";
import { useQuery } from "@apollo/client";
import logo from "../logo.svg";
import "../App.css";
import { DARK, toggleDarkMode, CLIENT } from '../graphql/queries/darkMode'


function Dark() {
    const { data } = useQuery(DARK, {
        client: CLIENT
    });
    let classNames = "App";

    if (data?.isDarkMode) {
        console.log(data);
        classNames += " dark";
    }

    return (
        <div className={classNames}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <input type="checkbox" id="switch" onChange={toggleDarkMode} />
                <label htmlFor="switch">Dark Mode toggle</label>
                <span style={{ "color": "#282c34" }}>Switch to Dark Mode</span>
                <span style={{ "color": "white" }}>Switch to Light Mode</span>
            </header>
        </div>
    );
}

export default Dark;