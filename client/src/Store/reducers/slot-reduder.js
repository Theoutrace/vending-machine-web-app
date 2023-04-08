import { createSlice } from "@reduxjs/toolkit";

const SlotSlice = createSlice({
  name: "slot",
  initialState: {
    locations: [],
    selectedLocation: null,
    cardDetails: null,
    transactionSuccess: null,
    selectedSlot: null,
  },
  reducers: {
    addLocations(state, action) {
      state.locations = action.payload;
    },

    selectedLocation(state, action) {
      state.selectedLocation = action.payload;
    },
    selectedCard(state, action) {
      state.cardDetails = action.payload;
    },

    transactionSuccess(state, action) {
      state.transactionSuccess = action.payload;
    },
    selectedSlot(state, action) {
      state.selectedSlot = action.payload;
    },
  },
});

export const SlotActions = SlotSlice.actions;
export default SlotSlice.reducer;
