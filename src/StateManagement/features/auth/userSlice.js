import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    setEmailNPassword: (state, action) => {
      const {email, password} = action.payload;
      state.user = {...state.user, email: email, password: password};
    },
    setBiometric: (state, action) => {
      const userData = action.payload;

      if (state.biometricEnabled === undefined) {
        state.user = {...userData, biometricEnabled: true};
      } else {
        return;
      }
    },
    setProfilePhoto: (state, action) => {
      const photo = action.payload;

      if (state.profilePhoto === undefined) {
        state.user = {...state.user, profilePhoto: photo};
      } else {
        return;
      }
    },
  },
});

export const {addUser, setEmailNPassword, setBiometric, setProfilePhoto} =
  userSlice.actions;
export const selectAllUserData = state => state.user.user;
export default userSlice.reducer;
