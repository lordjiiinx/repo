import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'

export default function layout({children}) {
  return (
    <div>
    <GoogleOAuthProvider clientId='864428733289-sap7lgshc90299ros25rr5sqkgm4dluv.apps.googleusercontent.com'>
        {
        children
        }

    </GoogleOAuthProvider>
   </div>
  )
}
