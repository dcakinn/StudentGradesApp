import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GradeProvider } from "./context/GradesContext";
import GradeEntry from "./components/GradeEntry";
import StudentGrades from "./components/StudentGrades";

// React Router ve Context API kullanılarak öğrenci not giriş ve görüntüleme uygulaması oluşturulmuştur.
// sayfa değişikliklerini yönetmek için BrowserRouter kullanılmıştır. sayfa refresh olmadan bileşen değişimi sağlanır.
const App = () => {
  return (
    <GradeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GradeEntry />} />
          <Route path="/grades" element={<StudentGrades />} />
        </Routes>
      </Router>
    </GradeProvider>
  );
};

export default App;
