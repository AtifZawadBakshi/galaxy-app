import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "react-select";
const DeliveryDetailsForm = ({ districthandle, thanahandle }) => {
  // const [district, setDistrict] = useState("");
  // const [thana, setThana] = useState("");
  // const handleDistrictChange = (event) => {
  //   setDistrict(event.target.value);
  // };
  // const handleThanaChange = (event) => {
  //   setThana(event.target.value);
  // };
  let searchDistrictList = [
    { label: "None", value: null },
    { label: "Dhaka", value: "Dhaka" },
    { label: "Rangpur", value: "Rangpur" },
    { label: "Khulna", value: "Khulna" },
  ];
  let searchThanaList = [
    { label: "None", value: null },
    { label: "Mirpur", value: "Mirpur" },
    { label: "Dhanmondi", value: "Dhanmondi" },
    { label: "Banani", value: "Banani" },
  ];
  return (
    <>
      <fieldset>
        <div className="row d-flex justify-content-around align-content-center">
          <div className="col-8 justify-content-between mb-3">
            <h3>Choose District:</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  options={searchDistrictList}
                  placeholder="Select District"
                  onChange={districthandle}
                />
              </FormControl>
            </Box>
          </div>
          <div className="col-8 justify-content-between mt-3">
            <h3>Choose Thana:</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  options={searchThanaList}
                  placeholder="Select Thana"
                  onChange={thanahandle}
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
          NEXT
        </button>
      </div> */}
    </>
  );
};

export default DeliveryDetailsForm;
