import './SignUp.scss'
import React, { Component } from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

class MySignUp extends Component {
  render() {
    const { errors, touched, isSubmitting } = this.props
    return (
      <div className="SignUp">
        <h1>Registration Form</h1>
        <Form>
          <div className="double-container">
            <div className="field-container">
              <Field name="firstName" placeholder="First Name" />
              {errors.firstName && touched.firstName ? (
                <p className="error-message">{errors.firstName}</p>
              ) : null}
            </div>
            <div className="field-container">
              <Field name="lastName" placeholder="Last Name" />
              {errors.lastName && touched.lastName ? (
                <div className="error-message">{errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="field-container">
            <label>
              <span>
                Day Of Birth
              </span>
              <Field name="birthdate" type="date" />
            </label>
            {errors.birthdate && touched.birthdate ? (
              <div className="error-message">{errors.birthdate}</div>
            ) : null}
          </div>
          <div className="triple-container">
            <div className="field-container">
              <label>
                <Field name="gender" type="radio" value="male" />
                Male
            </label>
              <label>
                <Field name="gender" type="radio" value="female" />
                Female
            </label>
              <label>
                <Field name="gender" type="radio" value="other" />
                Transgender
            </label>
              {errors.gender && touched.gender ? <div className="error-message">{errors.gender}</div> : null}
            </div>
          </div>
          <div className="field-container">
            <Field name="nationality" component="select" >
              {NATIONALITY.map((function(name, i){return <option key={i}>{name}</option>}))}
            </Field>
          </div>
          <div className="field-container">
            <Field name="email" type="email" placeholder="Email Address" />
            {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
          </div>
          <div className="double-container">
            <div className="field-container">
              <Field name="password" type="password" placeholder="Enter Password" />
              {errors.password && touched.password ? <div className="error-message">{errors.password}</div> : null}
            </div>
            <div className="field-container">
              <Field name="confirmPassword" type="password" placeholder="Re-Enter Password" />
              {errors.confirmPassword && touched.confirmPassword ? <div className="error-message">{errors.confirmPassword}</div> : null}
            </div>
          </div>
          <div className="field-container">
            <Field name="phoneNumber" type="phoneNumber" placeholder="Phone number" />
            {errors.phoneNumber && touched.phoneNumber ? <div className="error-message">{errors.phoneNumber}</div> : null}
          </div>
          <div className="field-container">
            <Field name="homeAddress" placeholder="Home Address" className="address" />
          </div>
          <div className="field-container">
            <Field name="workAddress" placeholder="Work Address" className="address" />
          </div>
          <button type="submit" disabled={isSubmitting} >Submit</button>
        </Form>
      </div>
    )
  }
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const min = '1950-01-01';
const max = '2000-1-1';
const NATIONALITY = [
  'Select Nationality',
  'Afghan',
  'Albanian',
  'Algerian',
  'American',
  'Andorran',
  'Angolan',
  'Antiguans',
  'Argentinean',
  'Armenian',
  'Australian',
  'Austrian',
  'Azerbaijani',
  'Bahamian',
  'Bahraini',
  'Bangladeshi',
  'Barbadian',
  'Barbudans',
  'Batswana',
  'Belarusian',
  'Belgian',
  'Belizean',
  'Beninese',
  'Bhutanese',
  'Bolivian',
  'Bosnian',
  'Brazilian',
  'British',
  'Bruneian',
  'Bulgarian',
  'Burkinabe',
  'Burmese',
  'Burundian',
  'Cambodian',
  'Cameroonian',
  'Canadian',
  'Cape Verdean',
  'Central African',
  'Chadian',
  'Chilean',
  'Chinese',
  'Colombian',
  'Comoran',
  'Congolese',
  'Costa Rican',
  'Croatian',
  'Cuban',
  'Cypriot',
  'Czech',
  'Danish',
  'Djibouti',
  'Dominican',
  'Dutch',
  'East Timorese',
  'Ecuadorean',
  'Egyptian',
  'Emirian',
  'Equatorial Guinean',
  'Eritrean',
  'Estonian',
  'Ethiopian',
  'Fijian',
  'Filipino',
  'Finnish',
  'French',
  'Gabonese',
  'Gambian',
  'Georgian',
  'German',
  'Ghanaian',
  'Greek',
  'Grenadian',
  'Guatemalan',
  'Guinea-Bissauan',
  'Guinean',
  'Guyanese',
  'Haitian',
  'Herzegovinian',
  'Honduran',
  'Hungarian',
  'Icelander',
  'Indian',
  'Indonesian',
  'Iranian',
  'Iraqi',
  'Irish',
  'Israeli',
  'Italian',
  'Ivorian',
  'Jamaican',
  'Japanese',
  'Jordanian',
  'Kazakhstani',
  'Kenyan',
  'Kittian and Nevisian',
  'Kuwaiti',
  'Kyrgyz',
  'Laotian',
  'Latvian',
  'Lebanese',
  'Liberian',
  'Libyan',
  'Liechtensteiner',
  'Lithuanian',
  'Luxembourger',
  'Macedonian',
  'Malagasy',
  'Malawian',
  'Malaysian',
  'Maldivan',
  'Malian',
  'Maltese',
  'Marshallese',
  'Mauritanian',
  'Mauritian',
  'Mexican',
  'Micronesian',
  'Moldovan',
  'Monacan',
  'Mongolian',
  'Moroccan',
  'Mosotho',
  'Motswana',
  'Mozambican',
  'Namibian',
  'Nauruan',
  'Nepalese',
  'New Zealander',
  'Ni-Vanuatu',
  'Nicaraguan',
  'Nigerien',
  'North Korean',
  'Northern Irish',
  'Norwegian',
  'Omani',
  'Pakistani',
  'Palauan',
  'Panamanian',
  'Papua New Guinean',
  'Paraguayan',
  'Peruvian',
  'Polish',
  'Portuguese',
  'Qatari',
  'Romanian',
  'Russian',
  'Rwandan',
  'Saint Lucian',
  'Salvadoran',
  'Samoan',
  'San Marinese',
  'Sao Tomean',
  'Saudi',
  'Scottish',
  'Senegalese',
  'Serbian',
  'Seychellois',
  'Sierra Leonean',
  'Singaporean',
  'Slovakian',
  'Slovenian',
  'Solomon Islander',
  'Somali',
  'South African',
  'South Korean',
  'Spanish',
  'Sri Lankan',
  'Sudanese',
  'Surinamer',
  'Swazi',
  'Swedish',
  'Swiss',
  'Syrian',
  'Taiwanese',
  'Tajik',
  'Tanzanian',
  'Thai',
  'Togolese',
  'Tongan',
  'Trinidadian or Tobagonian',
  'Tunisian',
  'Turkish',
  'Tuvaluan',
  'Ugandan',
  'Ukrainian',
  'Uruguayan',
  'Uzbekistani',
  'Venezuelan',
  'Vietnamese',
  'Welsh',
  'Yemenite',
  'Zambian',
  'Zimbabwean',
]

const SignupSchema = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    gender: Yup.string()
      .oneOf(['male', 'female', 'other'])
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match")
      .required('Confirm Password is required'),
    phoneNumber: Yup.string()
      .min(11, 'Too Short!')
      .max(13, 'Too Long!')
      .matches(phoneRegExp, 'Phone number is not valid'),
    birthdate: Yup.date()
      .default(new Date(max))
      .min(new Date(min))
      .max(new Date(max), 'You Have To Be Older Than 18'),
    nationality: Yup.string()
      .oneOf([...NATIONALITY])
      .required('Required')

  }),
  enableReinitialize: true,
  mapPropsToValues: props => ({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    homeAddress: '',
    workAddress: '',
    birthdate: '',
    nationality: ''
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      if (values.firstName === 'admin') {
        bag.setErrors({ firstName: 'Nice try!' });
      } else if (values.lastName === 'admin') {
        bag.setErrors({ lastName: 'Nice try!' });
      } else {
        console.log(values);
        bag.resetForm()
      }
      bag.setSubmitting(false);
    }, 2000)
  },
  displayName: 'FormikForm',
});
const SignUp = SignupSchema(MySignUp);
export default SignUp