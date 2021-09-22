import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../Redux/profile';

export default configureStore({
    reducer: {
        userProfile: profileReducer
    },
})