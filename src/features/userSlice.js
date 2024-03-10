import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const newUser = {
                uid: action.payload.uid,
                email: action.payload.email
            }
            state.users = newUser;
        },
        logout: (state, action) => {
            state.users = null
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer