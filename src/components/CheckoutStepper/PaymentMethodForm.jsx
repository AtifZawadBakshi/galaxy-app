import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const PaymentMethodForm = ({ paymenthandle }) => {
  return (
    <>
      <fieldset>
        <div className="d-flex justify-content-center align-content-center">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={paymenthandle}
            >
              <FormControlLabel
                value="Cash on Delivery"
                control={<Radio />}
                label="Cash on Delivery"
              />
              <FormControlLabel
                value="Digiital Payment Mathod"
                control={<Radio />}
                label="Digiital Payment Mathod (BKash/Nagad/Rocket)"
              />
              <FormControlLabel
                value="Card Payment"
                control={<Radio />}
                label="Card Payment (Visa/Master/AMEX)"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </fieldset>
      {/* <div className="d-flex justify-content-between mt-5">
        <button className="btn" type="back">
          PREVIOUS
        </button>
        <button className="btn" type="submit">
          NEXT
        </button>
      </div> */}
    </>
  );
};

export default PaymentMethodForm;
