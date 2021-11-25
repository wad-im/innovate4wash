import React, {useState, useLayoutEffect, useEffect} from 'react';
import styled from 'styled-components';
import { navigate } from "gatsby";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import queryString from "query-string";

const SignUp = ({location}) => {

    const [submitted, setSubmitted] = useState(false)
    const [completeRegistration, setCompleteRegistration] = useState(false)
    const { sessionId } = queryString.parse(location.search);

    useLayoutEffect(() => {
        if (!sessionId) {
          navigate("/registration");
        }
      }, [sessionId]);

    const checkout = async (values, location)=> {
        try {
            const response = await axios.post("/api/airtable", {values})
            const recordId = response.data.recordId
            // build a check here
            submitToPaymentApi(values, location, recordId) 
        } catch (error) {
            console.log(error.message)
        }
    }

    const submitToPaymentApi = async (values, location, recordId) => {
        try {
            const response = await axios.post("/api/payment", {
                email: values.email,
                cancelUrl: `${location.origin}/`,
                successUrl: `${location.origin}/registration/?sessionId={CHECKOUT_SESSION_ID}`,
                recordId: recordId
            })
            window.location = response.data.url;
            // setSubmitted(false)
        } catch (error) {
            console.log("from payment:" + error.message)
        }
    }

    useEffect(()=>{
        const verifyPayment = async (sessionId) => {
            try {
                const response = await axios.get("/api/payment", {
                    params: {
                        sessionId: sessionId 
                      }
                })
                const {recordId} = response.data
                recordPaymentInDb(recordId)
                setCompleteRegistration(true)
                
            } catch (error) {
                console.log("from payment verification" + error.message)
            }
        }
    
        if (sessionId) {
            verifyPayment(sessionId)
            setSubmitted(true)
        }
    },[sessionId])


    const recordPaymentInDb = async (recordId)=>{
        try {
            await axios.post("/api/updateRecord", {
                recordId: recordId
            })
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
        isInitialValid: false,
        onSubmit: (values, { resetForm }) => {
            checkout(values, location)
            setSubmitted(true)
            setTimeout(() => {
                resetForm()
              }, 400);
            
        }
    })
    return (
        
        <FormContainer>
            {
                completeRegistration ? <p className="confirmation-message"> 🎉 Thank you for your registration</p> : 
                submitted ?  <p className='submitting-message'>Forwarding you to payment- This may take a moment.</p> :
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
                        <button type='submit' disabled={formik.isSubmitting || !formik.isValid} className='submit-button' >Proceed to payment</button>
                    </form> 
            }
        </FormContainer>


        
     );
}
 
export default SignUp;

const FormContainer = styled.div`
    padding: 2rem;
    background-color: #137a757d;
    border-radius: 1rem;
    form {
        display: grid;
        grid-row-gap: 1.5rem;
    }
    .input-container {
        display: flex;
        flex-direction: column;
    }
    label {
        font-weight: 700;
        margin-bottom: 0.25rem;
    }
    input {
        background: none;
        background-color: none;
        border: none;
        border-bottom: 1px solid #20C9C1;
        font-size: 1rem;
        color: #fff;
        padding: .625rem .625rem .625rem .3125rem;
        &:focus {
            outline: none;
            border: 1px solid #20C9C1;
            border-radius: 0.5rem;
        }
        &::placeholder {
            color: #1AA19B;
            font-weight: 400;
            font-size: 1rem;
        }
    }
    .error-message {
        font-size: 0.75rem;
        align-self: flex-end;
    }
    .submit-button {
        all: unset;
        place-self: end;
        cursor: pointer;
        color: #fff;
        display: inline-flex;
        appearance: none;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        user-select: none;
        white-space: nowrap;
        vertical-align: middle;
        outline: transparent solid 2px;
        outline-offset: 2px;
        width: fit-content;
        min-height: 2rem;
        border-radius: 0.375rem;
        line-height: 1.2;
        padding-inline-start: 0.75rem;
        padding-inline-end: 0.75rem;
        background-color: #1AA19B;
        transition: transform 0.3s ease, border 0.3s ease;
        :active {
            transform: scale(0.98);
        }
        :focus {
            outline: 1px solid #fff;
            outline-offset: -4px;
        }
        :disabled {
            cursor: not-allowed;
        }
    }
`