export const partial = (Component, partialProps) => {
  const PartialComponent = (props) => {
    return <Component {...partialProps} {...props} />;
  };

  // Set the displayName for the returned component
  PartialComponent.displayName = `Partial(${
    Component.displayName || Component.name || "Component"
  })`;

  return PartialComponent;
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "large" ? "25px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const SmallButton = partial(Button, { size: "small" });

export const LargeRedButton = partial(Button, {
  size: "large",
  color: "crimson",
});
