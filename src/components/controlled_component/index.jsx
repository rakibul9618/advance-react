import { useState } from "react";
import { ControlledFlow } from "./controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <div>
      <h2>Step 1: Enter your name</h2>
      <button onClick={() => goNext({ name: "John Doe" })}>Next</button>
    </div>
  );
};

const StepTwo = ({ goNext }) => {
  return (
    <div>
      <h2>Step 1: Enter your age</h2>
      <button onClick={() => goNext({ age: 26 })}>Next</button>
    </div>
  );
};

const StepMiddle = () => {
  return (
    <div>
      <h2>You are qualify for next step</h2>
      {/* <button onClick={() => goNext({ age: 25 })}>Next</button> */}
    </div>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <div>
      <h2>Step 1: Enter your country</h2>
      <button onClick={() => goNext({ country: "BD" })}>Next</button>
    </div>
  );
};

const ControlledComponent = () => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onNext = (dataFromStep) => {
    const newData = { ...data, ...dataFromStep };
    console.log({ newData });

    setCurrentStepIndex(currentStepIndex + 1);
    setData(newData);
  };

  return (
    <ControlledFlow currentIndex={currentStepIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {data.age > 25 && <StepMiddle />}
      <StepThree />
    </ControlledFlow>
  );
};

export default ControlledComponent;
