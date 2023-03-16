import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import validator from 'validator';
import Alert from 'react-bootstrap/Alert';

const Index = () => {

  let [regis, setRegis] = useState({
    name: "",
    email: "",
    pass: "",
    cpass: ""
  });

  let [errors, setErrors] = useState({})


  let handleChange = (e)=> {
    setRegis({
      ...regis,[e.target.name]: e.target.value,
    })
    // console.log(regis)
  }
let handleSubmit = (e) => {
  e.preventDefault()
  const validationErrors = []

  // validation name
  if(validator.isEmpty(regis.name)) {
    validationErrors.name = "Name is empty"
  }

  // validation email
  if(validator.isEmpty(regis.email)) {
    validationErrors.email = "Email is Empty"
  }
  if(!validator.isEmail(regis.email)) {
    validationErrors.email = "Email is not valid"
  }

  //validation password
  if(validator.isEmpty(regis.pass)) {
    validationErrors.pass = "Password is required"
  }
  if(!validator.isLength(regis.pass,{min:8})) {
    validationErrors.pass = "Password is not valid"
  }

  // validation confirm password
  if(validator.isEmpty(regis.cpass) || !validator.equals(regis.pass, regis.cpass)) {
    validationErrors.cpass = "Password do not match"
  } 

  setErrors(validationErrors)
  if(Object.keys(validationErrors).length === 0) {
    alert(`
      Name: ${regis.name}
      Email: ${regis.email}
      Password: ${regis.pass}
      Confirm Pasword: ${regis.cpass}
  `)
  }
}
  return (
    <div className='container'>
      <Form onSubmit={handleSubmit}>
        {/* <Alert>
          {
            this.validation.errors.get('email')
          }
        </Alert> */}
        <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" value={regis.name} placeholder="Full Name" onChange={handleChange} />
            {errors.name && <Alert variant='danger'>{errors.name}</Alert>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={regis.email} placeholder="Enter email" onChange={handleChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {errors.email && <Alert variant='danger'>{errors.email}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="pass" value={regis.pass} placeholder="Password" onChange={handleChange} />
            {errors.pass && <Alert variant='danger'>{errors.pass}</Alert>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="cpass" value={regis.cpass} placeholder="Password" onChange={handleChange} />
            {errors.cpass && <Alert variant='danger'>{errors.cpass}</Alert>}
        </Form.Group>
        <Button style={{backgroundColor:'#9466FF'}} className='w-auto' type="submit">
            Register
        </Button>
      </Form>
    </div>
  )
}

export default Index
