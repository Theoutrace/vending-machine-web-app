import React from "react";
import "./EmployeeUI.css";
import Box from "@mui/material/Box";
import SingleBox from "../../components/selected box/SingleBox";
import { useDispatch, useSelector } from "react-redux";
import { SlotActions } from "../../Store/reducers/slot-reduder";
import CardDetails from "../../components/card details form/CardDetails";
import axios from "axios";
const locations = [
  { name: "Mumbai", machineId: "m1" },
  { name: "Pune", machineId: "m2" },
  { name: "Indore", machineId: "m3" },
  { name: "Raipur", machineId: "m4" },
];

const slots = [
  { name: "Nachos", slotId: "s2" },
  { name: "Cola", slotId: "s3" },
  { name: "Donuts", slotId: "s4" },
];

const EmployeeUI = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector((state) => state.slot.selectedLocation);
  const cardDetails = useSelector((state) => state.slot.cardDetails);
  const onSelectLocation = (locationItem) => {
    dispatch(SlotActions.selectedLocation(locationItem));
  };
  const transactionSuccess = useSelector(
    (state) => state.slot.transactionSuccess
  );

  const onSelectSlotHandler = async (slotName) => {
    console.log(selectedLocation);
    console.log(cardDetails);
    console.log(slotName);
    const machineId = selectedLocation.machineId;
    const selectedSlotName = slotName.name;
    /*
    Vend Request : Url. =    http:// localhost/vendreq/SVZBLR0001?card=111029&slot=A2
    Params= machineid(SVZBLR0001)
    Query = card(111029),slot(A2)
    */

    const response = await axios.post(
      `http://localhost:3000/vendreq/${machineId}/cardnohidden/${selectedSlotName}`,
      {
        cardNumber: cardDetails,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
  };
  return (
    <div className="EmployeeUI-page-outer">
      <h2 className="emp-location-select-text-heading">
        {selectedLocation === null &&
          transactionSuccess === null &&
          "Select Location"}
        {selectedLocation !== null &&
          cardDetails === null &&
          transactionSuccess === null &&
          "Enter Card Number"}
        {selectedLocation !== null &&
          cardDetails === null &&
          !transactionSuccess &&
          transactionSuccess !== null &&
          "OOPS! Transaction Cancelled"}
        {selectedLocation !== null &&
          cardDetails !== null &&
          transactionSuccess !== null &&
          transactionSuccess &&
          "Select Slot"}
      </h2>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
          width: "800px",
        }}
      >
        {selectedLocation === null &&
          cardDetails === null &&
          transactionSuccess === null && (
            <>
              {locations.map((item) => {
                return (
                  <SingleBox
                    key={item.machineId}
                    item={item}
                    onClickFunction={onSelectLocation}
                  />
                );
              })}
            </>
          )}
        {selectedLocation !== null && cardDetails === null && <CardDetails />}
        {selectedLocation !== null &&
          cardDetails !== null &&
          transactionSuccess &&
          slots.map((item) => {
            return (
              <SingleBox
                key={item.slotId}
                item={item}
                onClickFunction={onSelectSlotHandler}
              />
            );
          })}
      </Box>
    </div>
  );
};

export default EmployeeUI;
