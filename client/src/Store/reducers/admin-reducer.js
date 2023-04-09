import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    adminLogin: false,
    allEmployees: [],
    getMachines: false,
    getEmployees: false,
  },
  reducers: {
    adminLogin(state, action) {
      state.adminLogin = true;
    },
    adminLogout(state, action) {
      state.adminLogin = false;
    },
    addEmployees(state, action) {
      state.adminLogin = action.payload;
    },
    getMachines(state) {
      state.getMachines = !state.getMachines;
    },
    getEmployees(state) {
      state.getEmployees = !state.getEmployees;
    },
  },
});

export const AdminActions = AdminSlice.actions;
export default AdminSlice.reducer;
