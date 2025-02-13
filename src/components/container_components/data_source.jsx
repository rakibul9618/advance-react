import React, { useEffect, useState } from "react";

const DataSource = ({ getData = async () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getData();

      setResource(response.data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        } else return child;
      })}
    </>
  );
};

export default DataSource;
