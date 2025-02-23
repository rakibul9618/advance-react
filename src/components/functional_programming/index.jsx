import { Recursive } from "./recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

const FunctionalProgramming = () => {
  return (
    <div>
      <Recursive data={myNestedObject} />
    </div>
  );
};

export default FunctionalProgramming;
