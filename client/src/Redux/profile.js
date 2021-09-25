import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    username: "",
    email: "",
    profileImage: "",
    notifications: []
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action) => {
            const { name, username, email, profileImage } = action.payload;
            state.name = name
            state.username = username
            state.email = email
            state.profileImage = profileImage
        },
        notify: (state, action) => {
            const message = action.payload;
            state.notifications.push(message);
        },
        deleteNotification: (state, action) => {
            const notificationIndex = action.payload;
            state.notifications.splice(notificationIndex, 1);
        },
        clearNotifications: (state) => {
            state.notifications = [];
        }
    },
})

export const { setProfileData, notify, deleteNotification, clearNotifications } = profileSlice.actions
export default profileSlice.reducer;