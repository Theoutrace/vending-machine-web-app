import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    adminLogin: false,
  },
  reducers: {
    adminLogin(state, action) {
      state.adminLogin = true;
    },
    adminLogout(state, action) {
      state.adminLogin = false;
    },
  },
});

export const AdminActions = AdminSlice.actions;
export default AdminSlice.reducer;
