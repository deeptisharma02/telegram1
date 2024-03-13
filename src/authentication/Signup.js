import React from "react";
import bird from "../assests/bird.jpeg";
// import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
function Signup() {
  const initialValues = {
    phoneNumber: "",
    emailAddress: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required("Phone number is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 ">
        <img className="w-16 " src={bird} />
        <h1 className="text-3xl font-bold">Log in to Twitter</h1>

        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="pt-10">
                <div>
                  <Field
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number or Email Address"
                    className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <Field
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-3 text-white bg-blue-400 rounded-3xl mt-6 font-bold text-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Log in
                </button>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-row gap-10">
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Forgot Password?
                    </a>
                    <a
                      href="#"
                      className="font-medium text-blue-400 hover:text-blue-600"
                    >
                      <Link to="/signin">Sign Up to Twitter</Link>
                    </a>
                  </div>
                  <div></div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Signup;
