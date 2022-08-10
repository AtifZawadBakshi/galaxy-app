import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Button, Stepper, Step, StepLabel } from "@mui/material";
import UserDeatils from "../CheckoutStepper/UserDeatilsForm";
import PaymentMethodForm from "../CheckoutStepper/PaymentMethodForm";
import DeliveryDetailsForm from "../CheckoutStepper/DeliveryDetailsForm";
import LocationDetailsForm from "../CheckoutStepper/LocationDetailsForm";

const LinaerStepper = () => {
  function getSteps() {
    return [
      "Personal Information",
      "Payment Method",
      "Delivery Location",
      "Retail Confirmation",
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <UserDeatils
            fnamehandle={fnamehandle}
            lnamehandle={lnamehandle}
            telhandle={telhandle}
            emailhandle={emailhandle}
            saddresshandle={saddresshandle}
            pohandler={pohandler}
            cityhandle={cityhandle}
            pchandle={pchandle}
            onhandle={onhandle}
          />
        );
      case 1:
        return <PaymentMethodForm paymenthandle={paymenthandle} />;
      case 2:
        return (
          <DeliveryDetailsForm
            districthandle={districthandle}
            thanahandle={thanahandle}
          />
        );
      case 3:
        return (
          <LocationDetailsForm
            markethandle={markethandle}
            retailhandle={retailhandle}
          />
        );

      default:
        return "unknown step";
    }
  }

  const [activeStep, setActiveStep] = useState(0);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [tel, setTel] = useState(null);
  const [email, setEmail] = useState(null);
  const [saddress, setSaddress] = useState(null);
  const [postoffice, setPostoffice] = useState(null);
  const [city, setCity] = useState(null);
  const [postalcode, setPostalcode] = useState(null);
  const [ordernote, setOrdernote] = useState(null);
  const [payment, setPayment] = useState(null);
  const [district, setDistrict] = useState(null);
  const [thana, setThana] = useState(null);
  const [market, setMarket] = useState(null);
  const [retail, setRetail] = useState(null);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const steps = getSteps();
  const handleNextFinal = () => {
    setActiveStep(activeStep + 1);
    onSubmit();
  };
  const onSubmit = () => {
    let cartdetails = JSON.stringify(getdata);
    let orderdetails = {
      first_name: fname,
      last_name: lname,
      telephone: tel,
      email: email,
      street_address: saddress,
      post_office: postoffice,
      city: city,
      postal_code: postalcode,
      order_note: ordernote,
      payment_method: payment,
      district: district,
      thana: thana,
      market: market,
      retail: retail,
      products: getdata,
    };
    console.log("Order Details:", orderdetails);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const fnamehandle = (e) => {
    console.log(e.target.value);
    setFname(e.target.value);
  };
  const lnamehandle = (e) => {
    console.log(e.target.value);
    setLname(e.target.value);
  };
  const telhandle = (e) => {
    console.log(e.target.value);
    setTel(e.target.value);
  };
  const emailhandle = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const saddresshandle = (e) => {
    console.log(e.target.value);
    setSaddress(e.target.value);
  };
  const pohandler = (e) => {
    console.log(e.target.value);
    setPostoffice(e.target.value);
  };
  const cityhandle = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };
  const pchandle = (e) => {
    console.log(e.target.value);
    setPostalcode(e.target.value);
  };
  const onhandle = (e) => {
    console.log(e.target.value);
    setOrdernote(e.target.value);
  };
  const paymenthandle = (e) => {
    console.log(e.target.value);
    setPayment(e.target.value);
  };
  const districthandle = (e) => {
    console.log(e.value);
    setDistrict(e.value);
  };
  const thanahandle = (e) => {
    console.log(e.value);
    setThana(e.value);
  };
  const markethandle = (e) => {
    console.log(e.value);
    setMarket(e.value);
  };

  const retailhandle = (e) => {
    console.log(e.value);
    setRetail(e.value);
  };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          <div className="mt-5 ">
            <img src="assets/images/animations/icons8-ok.gif" alt="" />
            <h2>Order Confirmed</h2>
          </div>
        </Typography>
      ) : (
        <>
          <div
            className="mt-5"
            style={{
              height: "450px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form>{getStepContent(activeStep)}</form>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Button disabled={activeStep === 0} onClick={handleBack}>
              BACK
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="success"
                onClick={handleNextFinal}
              >
                PLACE ORDER
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext}>
                NEXT
              </Button>
            )}
            {/* <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "PLACE ORDER" : "NEXT"}
            </Button> */}
          </div>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
