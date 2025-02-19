import React, { useState } from "react";

export const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  const goNext = (dataFromStep) => {
    const newData = { ...data, ...dataFromStep };

    console.log({ newData });

    if (currentStepIndex < children.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      onDone(newData);
    }

    setData(newData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};
