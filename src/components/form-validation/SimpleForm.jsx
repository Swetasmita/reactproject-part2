import React, { useState } from "react";
import * as Yup from "yup";
import "./form.css";

const SimpleForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    gender: "",
    interest: [],
    birthDate: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  //state for handling errors
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .matches(/^\d{8}$/, "Phone Number must be 8 digits")
      .required(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contains at least one number")
      .matches(/[A-Z]/, "Password must contains at least one uppercase letter")
      .matches(/[a-z]/, "Password must contains at least one lowercase letter"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    age: Yup.number()
      .typeError("Age must be a nmuber")
      .min(18, "You must be at least 18 years old age")
      .max(100, "You cant be older than 100 years")
      .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interest: Yup.array()
      .min(1, "Select at least one interest")
      .required("Select at least one interest"),
    birthDate: Yup.date().required("Date of birth is required"),
  });

  //HandleChange for all form Data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //handleCheckboxChange for form Data
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedInterests = [...formData.interest];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter((item) => item !== name);
    }
    setFormData({
      ...formData,
      interest: updatedInterests,
    });
  };

  //Handle submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form submitted", formData);
      // Reset the form data
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      console.log(error.inner);
      setErrors(newError);
    }
    //setErrors(errors);
  };

  return (
    /*  */
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
        />
        {errors.firstName && <span className="error">{errors.lasttName}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber}</span>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select your Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
      <div>
        <label>Interests: </label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={formData.interest.includes("coding")}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interest.includes("sports")}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={formData.interest.includes("reading")}
              onChange={handleCheckboxChange}
            />
            Reading
          </label>
          {errors.interest && (
            <span className="error" onChange={handleChange}>
              {errors.interest}
            </span>
          )}
        </div>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate || ""}
          onChange={handleChange}
        />
        {errors.birthDate && <span className="error">{errors.birthDate}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
