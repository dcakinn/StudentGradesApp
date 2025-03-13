import React, { createContext, useState, useContext } from "react";

// Context API kullanılarak uygulama genelinde not verisini yönetmek için bir context oluşturulmuştur.
const GradesContext = createContext();

// grades ile öğrencilerin not verileri saklanır. setGrades de bu state'i günceller.
// provider tüm alt bileşenlere grades ve setGrades değerlerini sağlar.
// children propu ile provider içine yerleştirilen bileşenlerin bu değerlere erişmesi sağlanır.
export const GradeProvider = ({ children }) => {
  const [grades, setGrades] = useState({});
  return (
    <GradesContext.Provider value={{ grades, setGrades }}>
      {children}
    </GradesContext.Provider>
  );
};

// başka bileşenlerde useGrades() çağrıldığında grades ve setGrades kullanılabilmesi için
export const useGrades = () => useContext(GradesContext);
