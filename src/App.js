import "./styles.css";
import { useState } from "react";

export default function App() {
  //stroe age ,heught ,weight ,gender in state
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [Bmi, setBmi] = useState();
  const [overview, setOverview] = useState("");
  const [gender, setGender] = useState("Male");

  // set gender value
  const handlegender = (event) => {
    setGender(event.target.value);
  };

  // check male overview according to bmi
  const Male = () => {
    if (Bmi < 18.5) {
      setOverview("You are underWeight");
    } else if (Bmi === 18.5 || Bmi <= 24.5) {
      setOverview("You are Normalweight");
    } else if (Bmi === 25 || Bmi <= 29.5) {
      setOverview("You are overWeight");
    } else {
      setOverview("You are obesity");
    }
  };
  // check female overview according to bmi
  const Female = () => {
    if (Bmi < 20.5) {
      setOverview("You are underWeight");
    } else if (Bmi === 20.5 || Bmi <= 26.9) {
      setOverview("You are Normalweight");
    } else if (Bmi === 27 || Bmi <= 31.9) {
      setOverview("You are overWeight");
    } else {
      setOverview("You are obesity");
    }
  };

  // check which gender is selected and run function accordingly
  const genderOverview = () => {
    if (gender.includes("Male")) {
      Male();
    } else {
      Female();
    }
  };

  // take height and weight caluculate bmi
  const bmi = (height, weight) => {
    if (height && weight) {
      height = height * 0.0254;
      setBmi((weight / (height * height)).toFixed(1));
      genderOverview();
    } else {
      setBmi("invalid input");
    }
  };

  return (
    <div className="App">
      <h1 className="heading"> Bmi calculator</h1>
      <div className="input_div">
        {/* age input */}
        <input
          className="input-value"
          type="number"
          min="2"
          max="200"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {/* gender radio button */}
        <div onChange={handlegender}>
          <input
            className="input-radio"
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
          />
          male
          <input
            className="input-radio"
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
          />
          female
        </div>
        {/* height input */}
        <div className="height-weight">
          <input
            className="input-value"
            type="number"
            min="24"
            max="96"
            placeholder="height(inches)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          {/* weight input */}
          <input
            className="input-value"
            type="number"
            min="24"
            max="96"
            placeholder="weight(kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            bmi(height, weight);
          }}
        >
          submit
        </button>
      </div>
      <p className="result">{Bmi}</p>
      <p className="overview">{overview}</p>
    </div>
  );
}
