import React from "react";
import { useForm } from "react-hook-form";
const onSubmit = (data) => {
  console.log(data);
  sessionStorage.setItem("order_user-details", JSON.stringify(data));
};

const UserDeatils = ({
  fnamehandle,
  lnamehandle,
  emailhandle,
  telhandle,
  saddresshandle,
  pohandler,
  cityhandle,
  pchandle,
  onhandle,
}) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <>
      <fieldset>
        <div className="row">
          <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
            <label>
              First Name <span>*</span>
            </label>
            <input type="text" onChange={fnamehandle} required />
          </div>
          <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
            <label htmlFor="input-lastname">
              Last Name <span className="required-f">*</span>
            </label>
            <input type="text" onChange={lnamehandle} />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
            <label htmlFor="input-email">
              E-Mail <span className="required-f">*</span>
            </label>
            <input type="email" onChange={emailhandle} />
          </div>
          <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
            <label htmlFor="input-telephone">
              Telephone <span className="required-f">*</span>
            </label>
            <input type="tel" onChange={telhandle} />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div className="row">
          <div className="form-group col-md-6 col-lg-6 col-xl-6">
            <label>
              Street Address <span className="required-f">*</span>
            </label>
            <input type="text" onChange={saddresshandle} />
          </div>
          <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
            <label>
              Post Office <span className="required-f">*</span>
            </label>
            <input type="text" onChange={pohandler} />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6 col-lg-6 col-xl-6">
            <label>
              City <span className="required-f">*</span>
            </label>
            <input type="text" onChange={cityhandle} />
          </div>
          <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
            <label htmlFor="input-address-1">
              Postal Code<span className="required-f">*</span>
            </label>
            <input type="text" onChange={pchandle} />
          </div>
        </div>
      </fieldset>
      {/* <fieldset>
        <div className="row">
          <div className="form-group form-check col-md-12 col-lg-12 col-xl-12">
            <label className="form-check-label padding-15px-left">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={fnamehandle}
                name="checkbox"
              />
              <strong>Create an account ?</strong>
            </label>
          </div>
        </div>
      </fieldset> */}
      <fieldset>
        <div className="row">
          <div className="form-group col-md-12 col-lg-12 col-xl-12">
            <label htmlFor="input-company">
              Order Notes <span className="required-f">*</span>
            </label>
            <textarea
              className="form-control resize-both"
              rows={3}
              onChange={onhandle}
            />
          </div>
        </div>
      </fieldset>
      {/* <div className="d-flex justify-content-end">
        <button className="btn" type="submit">
          NEXT
        </button>
      </div> */}
    </>
  );
};

export default UserDeatils;
