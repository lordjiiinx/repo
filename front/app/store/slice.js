import { createSlice} from "@reduxjs/toolkit";
import{ PayloadAction } from '@reduxjs/toolkit'
const initialState = {
    value : {
        isAuth : false,
        username : '',
        group : ''

    }
    
}

const auth = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state,action) => {
            return {
                value : {
                    isAuth : true,
                    username : action.payload,
                }
            }
        },

        logout : ()=> {
            return initialState
        }


    }
})

export const{ login,logout} = auth.actions
export default auth.reducer