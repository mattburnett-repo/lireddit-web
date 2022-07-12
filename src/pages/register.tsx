import React from 'react'
import { Form, Formik } from 'formik'
// import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant='small'>
      <Formik 
        initialValues={{username: "", password: ""}} 
        onSubmit={(values) => {
          console.log(values)
        }}>
          {({values, handleChange, isSubmitting}) => (
              <Form>
                <InputField name="username" placeholder="username" label="Username" />
                <Box mt={4}>
                  <InputField name="password" placeholder="password" label="Password" type="password" />
                </Box>
                <Button mt={4} type="submit" isLoading={isSubmitting} color="teal">Register</Button>
              </Form>
          )}
      </Formik>
    </Wrapper>

  );
}

export default Register