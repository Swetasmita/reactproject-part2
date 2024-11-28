import React, { useState } from "react";
import "./signup.css";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  //Handle userData
  const handleChange = (e) => {
    const { name, value } = e.target;
    //setUserData((prev) =>({ ...prev, [name] : value }));
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //Handle Submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = {};
    const regexEmail = /\S+@\S+\.\S+/;
    if (!userData.username.trim()) {
      validationError.username = "Username is required!";
    }
    if (!userData.email.trim()) {
      validationError.email = "Email is required!";
    } else if (!regexEmail.test(userData.email)) {
      validationError.email = "Invalid email format";
    }
    if (!userData.password.trim()) {
      validationError.password = "Password is required!";
    } else if (userData.password.length < 6) {
      validationError.password = "password should be at least 6 char";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(userData.password)) {
      validationError.password = "Invalid Password";
    }
    if (userData.confirmPassword !== userData.password) {
      validationError.confirmPassword = "password not matched!";
    }
    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      alert("Form is submitted successfully ");
      console.log("Form submitted", userData);
      //reset form
      setUserData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <p>Please fill the form to create an account</p>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          autoComplete="off"
          placeholder="Username"
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          autoComplete="off"
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
        {errors.email && <span> {errors.email}</span>}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          autoComplete="off"
          placeholder="******"
          onChange={handleChange}
        />
        {errors.password && <span> {errors.password}</span>}
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          autoComplete="off"
          placeholder="******"
          onChange={handleChange}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
