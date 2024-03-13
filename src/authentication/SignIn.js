import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import bird from "../assests/bird.jpeg"

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  dobDay: Yup.number().required('Day of birth is required'),
  dobMonth: Yup.number().required('Month of birth is required'),
  dobYear: Yup.number().required('Year of birth is required'),
});

const initialValues = {
  name: '',
  phoneNumber: '',
  dobDay: '',
  dobMonth: '',
  dobYear: ''
};

const handleSubmit = (values, { setSubmitting }) => {
  
  console.log(values);
  setSubmitting(false);
};

const Signin = () => {
  return (
    <>
      
        <div className='flex flex-col justify-center items-center mt-5'>
          <img className='w-10 ' src={bird} alt="Twitter Logo" />
        </div>
        <div className='mx-44 my-10'>
        <h1 className='text-3xl font-bold justify-start'>Create an Account</h1>

        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='pt-10'>
                <div>
                  <Field type="text" id="name" placeholder="Name" name="name" className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>

                <div>
                  <Field type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
                </div>
                <h1 className='text-2xl mt-6 font-bold'>Date of Birth</h1>
                <p className='text-slate-700'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
</p>
                <div className="flex gap-2 mt-4">

               
                  <Field type="number" id="dobDay" name="dobDay" placeholder="Day" min="1" max="31" className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                  <Field as="select" name="dobMonth" className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                    <option value="">Select Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </Field>
                  <Field type="number" id="dobYear" name="dobYear" placeholder="Year" min="1900" max="2024" className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                </div>
                <ErrorMessage name="dobDay" component="div" className="text-red-500" />
                <ErrorMessage name="dobMonth" component="div" className="text-red-500" />
                <ErrorMessage name="dobYear" component="div" className="text-red-500" />

                <button type="submit" disabled={isSubmitting} className="w-full p-3 text-white bg-blue-400 rounded-3xl mt-6 font-bold text-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Next
                </button>

               
                    
                 
              
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signin;
