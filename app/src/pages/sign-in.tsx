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
      heading="Sign in"
      description="Good to see you back"
      tw="m-auto py-8"
    >
      <TextField
        label="Email"
        placeholder="Your email..."
        type="email"
      />
      <TextField
        label="Password"
        placeholder="Your password..."
        type="password"
      />
      <Checkbox>Remember me</Checkbox>
      <Button>Sign in</Button>
      <p tw="text-center">
        Don't have an account?
        <Link
          href="/sign-up"
          tw="mx-2"
        >
          Sign up
        </Link>
      </p>
    </FormBase>
  </GuestLayout>
)

export default SignInPage
