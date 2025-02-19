import { UncontrolledFlow } from "./uncontrolled-flow";
import { UncontrolledForm } from "./uncontrolled-form";
import { UncontrolledModal } from "./uncontrolled-modal";

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
      <button onClick={() => goNext({ age: 25 })}>Next</button>
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

const UncontrolledComponent = () => {
  return (
    <div>
      <UncontrolledModal>
        <UncontrolledForm />
      </UncontrolledModal>
      <UncontrolledFlow
        onDone={(data) => {
          console.log({ finalData: data });

          alert("Check console to see final data");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </div>
  );
};

export default UncontrolledComponent;
