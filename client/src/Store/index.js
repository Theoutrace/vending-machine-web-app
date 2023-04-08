import { configureStore } from "@reduxjs/toolkit";
import slotReduder from "./reducers/slot-reduder";
import adminReducer from "./reducers/admin-reducer";

const Store = configureStore({
  reducer: {
    slot: slotReduder,
    admin: adminReducer,
  },
});

export default Store;
