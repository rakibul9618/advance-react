import { useEffect, useState } from "react";

const DataSourceWithRender = ({ getData = async () => {}, render }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getData();
      console.log({ response });

      setResource(response.data);
    })();
  }, [getData]);
  return render(resource);
};

export default DataSourceWithRender;
