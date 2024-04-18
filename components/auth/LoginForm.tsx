import React from 'react'
import { CardWrapper } from './CardWrapper'
import { CardContent } from '../ui/card'

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel='Welcome Back'
      backButtonLabel="Don't have an account?"
      backButtonHref='/auth/register'
      showSocial
    >
      <CardContent>Login form</CardContent>
    </CardWrapper>
  )
}

