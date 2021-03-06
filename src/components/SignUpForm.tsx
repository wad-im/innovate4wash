import React, { useState, useLayoutEffect, useEffect } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import queryString from "query-string"
import { Form } from "../style/Mixins"
import { Link } from "gatsby"

interface User {
  fullName: string,
  organization: string,
  email: string,
}

const SignUp = ({ location }) => {
  const [status, setStatus] = useState<string>("initial")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [registrationName, setRegistrationName] = useState<string>(null)
  const { sessionId } = queryString.parse(location.search)

  // if the user returns to the website without a valid sessionId, redirect to clean registration page
  useLayoutEffect(() => {
    if (!sessionId) {
      navigate("/registration")
    }
  }, [sessionId])

  // send form data to airtable, fetch stripe checkout session and forward user to the checkout session
  const checkout = async (values: User, location) => {
    try {
      setStatus("forwarding")
      const response = await axios.post("/api/checkout", { values, location })
      window.location = response.data.url
    } catch (error) {
      console.log(error.message)
      setStatus("error")
    }
  }
  // verify payment of user after user returned from checkout session, mark successful payment on airtable database
  useEffect(() => {
    const verifyPayment = async sessionId => {
      try {
        const response = await axios.get("/api/payment", {
          params: {
            sessionId: sessionId,
          },
        })
        setRegistrationName(response.data.registrationName)
        setStatus("success")
      } catch (error) {
        console.log(error.message)
        setStatus("error")
      }
    }

    if (sessionId) {
      verifyPayment(sessionId)
      setStatus("verify payment")
    }
  }, [sessionId])

  // handling the user feedback on UI
  useEffect(() => {
    if (status === "submitting") {
      setFeedback("Submitting...")
    } else if (status === "forwarding") {
      setFeedback("Forwarding to payment...")
    } else if (status === "verify payment") {
      setFeedback("Quick check...")
    } else if (status === "success") {
      setFeedback(
        `Success! ${registrationName}, thank you for your registration ????.`
      )
    } else if (status === "error") {
      setFeedback("Oops ????. Something did not work out.")
    } else setFeedback(null)
  }, [status, registrationName])

  // storing, validating and sending off the form data to checkout
  const formik = useFormik({
    initialValues: {
      fullName: "",
      organization: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "Name can only contain Latin letters."
        )
        .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name.")
        .required("Required"),
      organization: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values: User, { resetForm }) => {
      checkout(values, location)
      setStatus("submitting")
      setTimeout(() => {
        resetForm()
      }, 400)
    },
  })
  return (
    <FormContainer>
      {feedback ? (
        <p>{feedback}</p>
      ) : (
        <form noValidate onSubmit={formik.handleSubmit}>
          <div className="input-container">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Jane Doe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="error-message">{formik.errors.fullName}</p>
            ) : null}
          </div>
          <div className="input-container">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Example Ltd."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.organization}
            />
            {formik.touched.organization && formik.errors.organization ? (
              <p className="error-message">{formik.errors.organization}</p>
            ) : null}
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error-message">{formik.errors.email}</p>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting || !formik.initialErrors}
            className="submit-button"
          >
            Proceed to payment
          </button>
        </form>
      )}
      {feedback ? null : (
        <div className="notice">
          <p>
            Please read the <Link to="/terms-and-conditions">Terms of use</Link>{" "}
            and our <Link to="privacy-policy">Privacy Policy</Link> before
            submitting the form.
          </p>
        </div>
      )}
    </FormContainer>
  )
}

export default SignUp

const FormContainer = styled.div`
  ${Form()}
  @media screen and (max-width: 994px) {
    grid-column: 1 / span 2;
    margin-bottom: 3.052rem;
  }
`
