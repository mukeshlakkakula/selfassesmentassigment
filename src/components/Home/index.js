import "./index.css";

import AccaEligibility from "../AccaElgibility";
import BecomeAcca from "../BecomeAcca";
const Home = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  const KickoffContainer = (
    <div className="whyChooseContainer">
      <h2 className="text-info">Kick off your ACCA Prep journey with Us</h2>
      <p>Your trusted partner for ACCA preparation.</p>
      <h4>Features:</h4>
      <ul className="text-primary font-weight-bold">
        <li>Interactive learning modules</li>
        <li>Expert-led sessions</li>
        <li>Mock exams and assessments</li>
      </ul>
    </div>
  );

  const HomeContent = (
    <div className="fullHome">
      <div className="HomeFullContainer">
        <div className="introContainer">
          <h1 className="text-info">
            Welcome To Association of Chartered Certified Accountants
          </h1>

          <ul className="text-secondary ">
            <li>Global CA certification with recognition in 10+ Countries</li>
            <li>World’s oldest and largest Chartered Accountancy body</li>
            <li>Fast-track your career</li>
            <li>Flexible learning options</li>
            <li>Expert guidance throughout</li>
          </ul>
        </div>
        <div>
          <h3>Register Here</h3>

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
      </div>
    </div>
  );
  return (
    <div>
      {" "}
      {HomeContent}
      <AccaEligibility />
      <BecomeAcca />
      {KickoffContainer}
    </div>
  );
};

export default Home;
