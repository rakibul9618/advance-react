const isValidObj = (data) => typeof data === "object" && data !== null;

export const Recursive = ({ data }) => {
  if (!isValidObj(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  console.log(data);
  return (
    <>
      {pairs.map(([key, value], ind) => {
        return (
          <li key={ind}>
            {key}:
            <ul>
              <Recursive data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
