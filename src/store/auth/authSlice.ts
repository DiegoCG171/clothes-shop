import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
        id: '',
        name: '',
        role: ''
    },
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLogin: (state) => {
            state.user.id = '01'
            state.user.name = 'Diego'
            state.user.role = "admin"
            state.token = '0as0d0asd9123000---asdasd'
        },
        onLogout: (state) => {
            state.user.id = ''
        }
    }
})

export const { onLogin, onLogout } = authSlice.actions;