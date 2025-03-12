import React from "react";
import { useGrades } from "../context/GradesContext";
import { Link } from "react-router-dom";

const StudentGrades = () => {
  const { grades } = useGrades();

  const calculateAverage = (studentGrades) => {
    const homeworkAvg = ((studentGrades.homework1 || 0) + (studentGrades.homework2 || 0) + (studentGrades.homework3 || 0)) / 3;
    const midtermAvg = ((studentGrades.midterm1 || 0) + (studentGrades.midterm2 || 0)) / 2;
    const finalGrade = studentGrades.final || 0;
    return (homeworkAvg * 0.15 + midtermAvg * 0.40 + finalGrade * 0.45).toFixed(2);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Öğrenci Ortalama Notları</h2>
      <Link to="/" className="text-blue-500 underline">Geri Dön</Link>
      <ul>
        {Object.entries(grades).map(([studentId, studentGrades]) => (
          <li key={studentId} className="p-2 border-b">
            <span>Öğrenci ID: {studentId}</span>
            <div className="mt-2 font-bold">Ortalama: {calculateAverage(studentGrades)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentGrades;
