import { Button } from "@mui/material";
import React, { useRef } from "react";
import "./CardDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { SlotActions } from "../../Store/reducers/slot-reduder";
import axios from "axios";
const dummyCardNumbers = ["1234", "1454", "1254", "1634", "1238", "1274"];

const CardDetails = () => {
  const cardnumberref = useRef();
  const dispatch = useDispatch();
  const transactionSuccess = useSelector(
    (state) => state.slot.transactionSuccess
  );
  const selectedLocation = useSelector((state) => state.slot.selectedLocation);

  const onCardSubmitHandler = async (e) => {
    e.preventDefault();
    if (cardnumberref.current.value.length > 0) {
      const details = {
        cardNumber: cardnumberref.current.value,
        machineId: selectedLocation.machineId,
      };

      const response = await axios.post(
        `http://localhost:3000/card/verify`,
        details,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      if (dummyCardNumbers.includes(cardnumberref.current.value)) {
        console.log("found");
        dispatch(SlotActions.selectedCard(cardnumberref.current.value));
        dispatch(SlotActions.transactionSuccess(true));
      } else {
        dispatch(SlotActions.transactionSuccess(false));
      }
    }
  };
  return (
    <>
      {transactionSuccess === null && (
        <div className="CardDetails-cls-outer">
          <form onSubmit={onCardSubmitHandler}>
            <input
              placeholder="Enter card number XXXX XXXX XXXX"
              type="password"
              ref={cardnumberref}
            />
            <Button
              sx={{
                margin: "10px",
                marginBottom: "0px",
                fontSize: "16px",
                backgroundColor: "black",
                padding: "10px 30px",
                borderRadius: "10px",
                width: "412px",
                color: "white",
                "&:hover": {
                  backgroundColor: "blue",
                  border: "1px dashed blue",
                },
                border: "1px dashed grey",
              }}
              type="submit"
            >
              Verify
            </Button>
          </form>
        </div>
      )}
      {!transactionSuccess && transactionSuccess !== null && (
        <div className="unauth-card-details-msg">
          <h2>Unauthorised card</h2>
          <p>Kindly inform the admin department about this</p>
        </div>
      )}
    </>
  );
};

export default CardDetails;
