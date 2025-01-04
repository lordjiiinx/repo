import { GoogleOAuthProvider } from "@react-oauth/google";

const Providergoogle = ({children})=> {
    <GoogleOAuthProvider clientId='864428733289-sap7lgshc90299ros25rr5sqkgm4dluv.apps.googleusercontent.com'>
        {children}
    </GoogleOAuthProvider>

}

export default Providergoogle