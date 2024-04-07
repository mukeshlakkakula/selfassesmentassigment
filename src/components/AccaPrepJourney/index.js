import React from "react";
import "./index.css";

const PrepJourney = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  const prepJourneyView = (
    <div>
      <form onSubmit={submitForm} className="formContainer">
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              required
              className="form-control"
              id="firstName"
              placeholder="ex:- Rahul"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="lastName"
              placeholder="ex:-Gandhi"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              required
              pattern="[0-9]{10}"
              placeholder="ex:- 9501253685"
            />
          </div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-success mt-2"
          onSubmit={submitForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
  return (
    <div className="PrepJourneyFullContainer">
      <h3 className="text-danger">Start your Journey by Registering Here</h3>
      {prepJourneyView}
    </div>
  );
};

export default PrepJourney;
