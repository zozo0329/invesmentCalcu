import React, { useState } from "react";
import "./FormCal.css";
const FormCal = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");
  const currentSavingsHandler = (e) => {
    setCurrentSavings(e.target.value);
    console.log("Current-savings: ", currentSavings);
  };
  const yearlyContributionHandler = (e) => {
    setYearlyContribution(e.target.value);
    console.log("yearly-contribution: ", yearlyContribution);
  };
  const expectedReturnHandler = (e) => {
    setExpectedReturn(e.target.value);
    console.log("ExpectedReturn: ", expectedReturn);
  };
  const durationHandler = (e) => {
    setDuration(e.target.value);
    console.log("Duration: ", duration);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const allData = {
      currentSavings,
      yearlyContribution,
      expectedReturn,
      duration,
    };
    props.onCalculate(allData);
    //  ...
    console.log("SUBMITED");
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };
  const resetHandler = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };
  return (
    <div className="FormCal-container">
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={currentSavingsHandler}
              value={currentSavings}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={yearlyContributionHandler}
              value={yearlyContribution}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={expectedReturnHandler}
              value={expectedReturn}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={durationHandler}
              value={duration}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default FormCal;
