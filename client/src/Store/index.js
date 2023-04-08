import { configureStore } from "@reduxjs/toolkit";
import slotReduder from "./reducers/slot-reduder";

const Store = configureStore({
  reducer: {
    slot: slotReduder,
  },
});

export default Store;
