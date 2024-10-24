// src/redux/applicationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    applicants: [], // Initialize with an empty array
  },
  reducers: {
    setAllApplicants: (state, action) => {
      state.applicants = action.payload; // Set applicants state with the payload
    },
  },
});

// Export the action
export const { setAllApplicants } = applicationSlice.actions;

// Export the reducer
export default applicationSlice.reducer;
