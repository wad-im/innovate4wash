import React, {useState} from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

const SignUp = () => {


    const submitToApi = async (values)=> {
        try {
            const response = await axios.post("/api/airtable", {values})
            console.log(response)

            
        } catch (error) {
            console.log(error.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            fullName: '',
            organization: '',
            email: ''
        },
        validationSchema: Yup.object({
            fullName: Yup
                .string()
                .matches(
                    /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                        'Name can only contain Latin letters.'
                    )
                .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms,'Please enter your full name.')
                .required('Required'),
            organization: Yup.string().required('Required'),
            email: Yup.string().email("Invalid email address").required('Required')
        }),
        onSubmit: (values) => {
            submitToApi(values)
        }
    })
    // console.log(formik.errors)
    return ( 
        <form noValidate onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <input
                    type="text"
                    id='fullName'
                    name='fullName'
                    placeholder='Full Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                 />
                 {formik.touched.fullName &&  formik.errors.fullName ? <p>{formik.errors.fullName}</p> : null}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    id='organization'
                    name='organization'
                    placeholder='Organization'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.organization}
                 />
                 { formik.touched.organization && formik.errors.organization ? <p>{formik.errors.organization}</p> : null}
            </div>
            <div className="input-container">
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                 />
                 { formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <button type='submit' >Submit</button>
        </form>
     );
}
 
export default SignUp;