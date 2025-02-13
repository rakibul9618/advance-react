import React, { useEffect, useState } from "react";
import { Client } from "../../utils/axios.config";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await Client.get(resourceUrl);
      console.log(response.data);

      setResource(response.data);
    })();
  }, [resourceUrl]);
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

export default ResourceLoader;
