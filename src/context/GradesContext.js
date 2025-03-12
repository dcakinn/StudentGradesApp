import React, { createContext, useState, useContext } from "react";

const GradesContext = createContext();

export const GradeProvider = ({ children }) => {
  const [grades, setGrades] = useState({});
  return (
    <GradesContext.Provider value={{ grades, setGrades }}>
      {children}
    </GradesContext.Provider>
  );
};

export const useGrades = () => useContext(GradesContext);
