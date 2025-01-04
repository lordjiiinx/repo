import { configureStore } from "@reduxjs/toolkit";

import authreducer from './slice'

export const store = configureStore({
    reducer: {
        authreducer,
    }
})