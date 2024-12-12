import { useState } from "react";
import FormCal from "./Components/FormCal/FormCal";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
import "./App.css";
function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userData) => {
    setUserInput(userData);
    console.log("Submited: ", userData);
  };
  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  console.log(userInput, "DATADATA");

  return (
    <div className="App-container">
      <div>
        <Header />
      </div>
      <div>
        <FormCal onCalculate={calculateHandler} />
      </div>
      <div>
        {!userInput && <p className="IFNODATA">No data for now.</p>}
        {userInput && (
          <Table
            data={yearlyData}
            initialInvesment={userInput.currentSavings}
          />
        )}
      </div>
    </div>
  );
}

export default App;
