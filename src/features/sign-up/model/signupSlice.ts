import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SignupState {
  nicknameError: string | null;
  isNameValid: boolean;
  isNicknameChecked: boolean;
  isSubmitEnabled: boolean;
}

const initialState: SignupState = {
  nicknameError: null,
  isNameValid: false,
  isNicknameChecked: false,
  isSubmitEnabled: false,
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setNicknameError: (state, action: PayloadAction<string | null>) => {
      state.nicknameError = action.payload;
    },
    setIsNameValid: (state, action: PayloadAction<boolean>) => {
      state.isNameValid = action.payload;
    },
    setIsNicknameChecked: (state, action: PayloadAction<boolean>) => {
      state.isNicknameChecked = action.payload;
    },
    setIsSubmitEnabled: (state, action: PayloadAction<boolean>) => {
      state.isSubmitEnabled = action.payload;
    },
  },
});

export const { setNicknameError, setIsNameValid, setIsNicknameChecked, setIsSubmitEnabled } = signupSlice.actions;
export default signupSlice.reducer;