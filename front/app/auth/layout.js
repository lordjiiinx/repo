import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'

export default function layout({children}) {
  return (
    <div>
    <GoogleOAuthProvider clientId=''>
        {
        children
        }

    </GoogleOAuthProvider>
   </div>
  )
}
