import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "react-select";
const LocationDetailsForm = ({ markethandle, retailhandle }) => {
  // const [market, setMarket] = useState("");
  // const [retail, setRetail] = useState("");
  // const handleRetailChange = (event) => {
  //   setRetail(event.target.value);
  // };
  // const handleMarketChange = (event) => {
  //   setMarket(event.target.value);
  // };
  let searchMarketList = [
    { label: "Select Market", value: null },
    { label: "Market", value: "Market" },
    { label: "Market", value: "Market" },
    { label: "Market", value: "Market" },
  ];
  let searchRetailList = [
    { label: "Select Retail", value: null },
    { label: "Retail", value: "Retail" },
    { label: "Retail", value: "Retail" },
    { label: "Retail", value: "Retail" },
  ];

  return (
    <>
      <fieldset>
        <div className="row d-flex justify-content-around align-content-center">
          <div className="col-8 justify-content-between mb-3">
            <h3>Choose your Market:</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  options={searchMarketList}
                  placeholder="Select Market"
                  onChange={markethandle}
                />
              </FormControl>
            </Box>
          </div>
          <div className="col-8 justify-content-between mt-3">
            <h3>Choose your Retail:</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  options={searchRetailList}
                  placeholder="Select Retail"
                  onChange={retailhandle}
                />
              </FormControl>
            </Box>
          </div>
        </div>
      </fieldset>
      {/* <div className="d-flex justify-content-between mt-5">
        <button className="btn" type="back">
          PREVIOUS
        </button>
        <button className="btn" type="submit">
          Place Order
        </button>
      </div> */}
    </>
  );
};
export default LocationDetailsForm;
