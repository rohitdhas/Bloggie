import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    username: "",
    email: "",
    profileImage: "",
    bookmarks: [],
    notifications: []
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action) => {
            const { name, username, email, profileImage, bookmarks } = action.payload;
            state.name = name
            state.username = username
            state.email = email
            state.profileImage = profileImage
            state.bookmarks = bookmarks
        },
        notify: (state, action) => {
            const message = action.payload;
            state.notifications.push(message);
        },
        deleteNotification: (state, action) => {
            const notificationIndex = action.payload;
            state.notifications.splice(notificationIndex, 1);
        }
    },
})

export const { setProfileData, notify, deleteNotification } = profileSlice.actions
export default profileSlice.reducer;