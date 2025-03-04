import React, { useEffect, useState } from "react";
import { Client } from "../../utils/axios.config";

const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await Client.get(`/users/${userId}`);
      console.log(response.data);

      setUser(response.data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        } else return child;
      })}
    </>
  );
};

export default UserLoader;
