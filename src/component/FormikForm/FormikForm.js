import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { red } from 'ansi-colors';

const INNTIALVALUES = {
  firstName: '',
  lastName: '',
  email: '',
}
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


function validateName(value) {
  let error;

  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

class FormikForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...INNTIALVALUES,
      activateButton: true
    }
  }
  render() {

    console.log('mmmm:', SignupSchema)
    const {
      email,
      firstName,
      lastName,
    } = this.state;
    

    const
    activateButton =
    SignupSchema.fields.firstName === '' ||
    SignupSchema.fields.lastName === '' ||
    SignupSchema.fields.email === '';
    console.log('mmmm:', activateButton)


    return (
      <div className="FormikForm">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            ...INNTIALVALUES

          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
            console.log(SignupSchema);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="firstName" validate={validateName} />
              {errors.firstName && touched.firstName ? (
                <div className="testtest">{errors.firstName}</div>
              ) : null}
              <Field name="lastName" validate={validateName} />
              {errors.lastName && touched.lastName ? (
                <div className="testtest">{errors.lastName}</div>
              ) : null}
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div className="testtest" style={{ color: red, fontSize: 10 }}>{errors.email}</div> : null}
              <button type="submit" disabled={activateButton}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}


export default FormikForm