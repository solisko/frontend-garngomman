import { createContext, useState } from "react";

export const GarnContext = createContext();

const GarnProvider = (props) => {
  const [category, setCategory] = useState(null);
  const [renderedComponent, setRenderedComponent] = useState(null);

  const categorySetter = (title) => {
    setCategory(title);
  };

  const renderComponent = (title) => {
    switch (title) {
      case "Garn":
        setRenderedComponent(<Apple />);
        break;
      case "Nålar":
        setRenderedComponent(<Pear />);
        break;
      case "Tillbehör":
        setRenderedComponent(<Banana />);
        break;
      default:
        setRenderedComponent(null);
    }
  };

  return (
    <>
      <GarnContext.Provider
        value={{
          categorySetter,
          category,
        }}
      >
        {props.children}
      </GarnContext.Provider>
    </>
  );
};

export default GarnProvider;
