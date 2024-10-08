import { createContext, useState } from "react";

export const GarnContext = createContext();

const GarnProvider = (props) => {
  const [category, setCategory] = useState(null);

  const categorySetter = (title) => {
    setCategory(title);
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
