import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Form} from '../style/Mixins';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { Link } from 'gatsby';

const InvitationForm = () => {
    
    const [status, setStatus] = useState(null)
    const [feedback, setFeedback] = useState(null)
    const [userName, setUserName] = useState(null)

    const submitFormData = async (values) => {
        setStatus('submitting')
        try {
            const response = await axios.post("/api/inviteme", {values})
            setUserName(response.data.registrationName)
            setStatus('success')
        } catch (error) {
            console.log(error.message)
            setStatus('error')
        }
    }

    useEffect( ()=> {
        if (status === 'submitting'){
            setFeedback('Submitting...')
        } else if (status === 'success') {
            setFeedback(`Success 🎉! ${userName}, we have just sent you an email.`)
        } else if (status === 'error'){
            setFeedback('Oops 😞. Something did not work out.')
        }
        else (
            setFeedback(null)
        )
    },[status, userName])
    
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
        onSubmit: (values, { resetForm }) => {
            submitFormData(values)
            setTimeout(() => {
                resetForm()
              }, 400);
            
        }
    })
    return (
        
        <FormContainer>
            {
                feedback ? <p>{feedback}</p> : 
                <form noValidate onSubmit={formik.handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id='fullName'
                            name='fullName'
                            placeholder='Jane Doe'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                        />
                        {formik.touched.fullName &&  formik.errors.fullName ? <p className="error-message">{formik.errors.fullName}</p> : null}
                    </div>
                    <div className="input-container">
                        <label htmlFor="organization">Organization</label>
                        <input
                            type="text"
                            id='organization'
                            name='organization'
                            placeholder='Example Ltd.'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.organization}
                        />
                        { formik.touched.organization && formik.errors.organization ? <p className="error-message">{formik.errors.organization}</p> : null}
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder='example@example.com'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        { formik.touched.email && formik.errors.email ? <p className="error-message">{formik.errors.email}</p> : null}
                    </div>
                    <button type='submit' disabled={formik.isSubmitting || !formik.initialErrors} className='submit-button' >Invite me!</button>
                </form> 
            }
            {
                feedback ? null : 
                <div className="notice">
                    <p>Please read the <Link to='/terms-and-conditions'>Terms of use</Link> and our <Link to='privacy-policy'>Privacy Policy</Link> before submitting the form.</p>
                </div>
            }
            
        </FormContainer>
     );
}
 
export default InvitationForm;

const FormContainer = styled.div`
    ${Form()}
    @media screen and (max-width: 994px){
        grid-column: 1 / span 2;
    }
`