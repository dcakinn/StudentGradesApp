import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GradeProvider } from "./context/GradesContext";
import GradeEntry from "./components/GradeEntry";
import StudentGrades from "./components/StudentGrades";

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
