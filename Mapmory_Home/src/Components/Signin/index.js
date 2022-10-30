import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Mapmory</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>이메일로 로그인 하세요</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required></FormInput>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton type='submit'>Login</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
