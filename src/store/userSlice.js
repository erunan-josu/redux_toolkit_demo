import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  username: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, username, email } = action.payload

      state.name = name
      state.username = username
      state.email = email
    },
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeUserName: (state, action) => {
      state.username = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    }
  }
})

export const { addUser, changeName, changeUserName, changeEmail } =
  userSlice.actions
export default userSlice.reducer
