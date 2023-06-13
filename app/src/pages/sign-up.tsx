import React from 'react'
import GuestLayout from '../components/molecules/GuestLayout/GuestLayout'
import FormBase from '../components/atoms/FormBase/FormBase'
import Checkbox from '../components/atoms/Checkbox/Checkbox'
import TextField from '../components/atoms/TextField/TextField'
import Button from '../components/atoms/Button/Button'
import 'twin.macro'
import Link from '../components/molecules/Link/Link'

const SignInPage = () => (
  <GuestLayout>
    <FormBase
      heading="Sign up"
      description="Chat with friends - sign up now!"
    >
      <TextField
        label="Name"
        placeholder="Your name..."
        type="email"
      />
      <TextField
        label="Email"
        placeholder="Your email..."
        type="email"
      />
      <TextField
        label="Password"
        placeholder="Your password..."
        type="email"
      />
      <Checkbox>I agree with Terms Conditions and Privacy Policy</Checkbox>
      <Button>Sign up</Button>
      <p tw="text-center">
        Already have an account?
        <Link
          href="/sign-in"
          tw="mx-2"
        >
          Sign in
        </Link>
      </p>
    </FormBase>
  </GuestLayout>
)

export default SignInPage
