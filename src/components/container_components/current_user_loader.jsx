import React, { useEffect, useState } from "react";
import { Client } from "../../utils/axios.config";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await Client.get("/current-user");
      console.log(response.data);

      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
