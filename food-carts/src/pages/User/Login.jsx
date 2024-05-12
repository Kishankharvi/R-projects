import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Login = () => {
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await axios.post("http://localhost/loginn.php", values); // Send form data to backend PHP endpoint
      console.log("Response:", response.data);
      setStatus(response.data.message); // Set status message
      // Handle success (e.g., redirect user, show success message)
      console.log("record checked");
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error: Unable to login"); // Set error message
      // Handle error (e.g., display error message to user)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={handleSubmit} // Call custom submit handler
        >
          {({ isSubmitting, status }) => (
            <Form>
              <label>Name</label>
              <Field type="text" name="name" />
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              {status && <div>{status}</div>} {/* Display status message */}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
