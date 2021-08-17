import React, { useState } from "react";
import { REGISTER_USER } from "../graphql/mutations/register";
import { useMutation } from "@apollo/client";

function Form() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [register, { error }] = useMutation(REGISTER_USER);

  const addUser = () => {

    register({
      variables: {
        Email: email,
        Fname: firstName,
        Lname: lastName,
        Pw: password,
      },
    });

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
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br /><br /><br />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br /><br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br /><br /><br />
      <button onClick={() => addUser()}> Create User</button>
      <br /><br /><br />
    </div>
  );
}

export default Form;