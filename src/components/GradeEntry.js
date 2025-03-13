import React, { useState, useEffect } from "react";
import { useGrades } from "../context/GradesContext";
import { Link } from "react-router-dom";

const GradeEntry = () => {
  const { grades, setGrades } = useGrades();
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");


  // "classes.json" dosyasına HTTP isteği atarak dosyadan sınıf verilerini çeker. 
  // fetch isteğine verilen yanıt JSON formatına dönüştürülerek JSON'dan dönen sınıf listesini alınır ve classes state'ine kaydedilir. 
  useEffect(() => {
    fetch("/public/classes.json")
      .then((response) => response.json())
      .then((data) => setClasses(data));
  }, []);

  
  // "sections.json" dosyasına seçilen sınıfa bağlı olarak dinamik bir HTTP isteği atılır. HTTP yanıtı JSON formatına dönüştürülür.
  // JSON verisi alınır ve sections state'i güncellenir. kullanıcının seçtiği sınıfa ait şubeler listelenir.
  useEffect(() => {
    if (selectedClass) {
      fetch(`/public/sections.json?class=${selectedClass}`)
        .then((response) => response.json())
        .then((data) => setSections(data));
    }
  }, [selectedClass]);
  

  // "subjects.json" dosyasına, seçilen sınıf ve şube bilgileriyle bir HTTP isteği atılır. HTTP yanıtı JSON formatına dönüştürülür.
  // JSON'dan dönülen veriler subjects state'ine kaydedilir. kullanıcının seçtiği sınıf ve şubeye ait dersler listelenir.
  useEffect(() => {
    if (selectedClass && selectedSection) {
      fetch(`/public/subjects.json?class=${selectedClass}&section=${selectedSection}`)
        .then((response) => response.json())
        .then((data) => setSubjects(data));
    }
  }, [selectedClass, selectedSection]);
  

  // "students.json" dosyasına, seçilen sınıf ve şube bilgileriyle dinamik bir HTTP isteği atılır. HTTP yanıtı JSON formatına dönüştürülür.
  // JSON'dan dönülen veriler students state'ine kaydedilir.
  useEffect(() => {
    if (selectedClass && selectedSection && selectedSubject) {
      fetch(`/public/students.json?class=${selectedClass}&section=${selectedSection}`)
        .then((response) => response.json())
        .then((data) => setStudents(data));
    }
  }, [selectedClass, selectedSection, selectedSubject]);
  

  // öğrenci notlarının güncellenmesi veya değiştirilmesi için öğrenci ID'si ve not değeri prevGrades'te tutularak kullanıcıdan alınanyeni değer ile güncellenir.
  // geçersiz bir not girilirse 0 olarak güncellenir.
  const handleGradeChange = (studentId, field, newGrade) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [studentId]: {
        ...prevGrades[studentId],
        [field]: parseFloat(newGrade) || 0,
      },
    }));
  };

  // kullanıcının interact edeceği not giriş ekranıdır. 
  // kullanıcı, sınıf seçimi yaparak ilerleyebilir ve seçtiği sınıfa göre ilgili öğrencilere not girebilir. 
  return (
    <div className="p-4 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Not Girişi</h2>
      <Link to="/grades" className="text-blue-500 underline">Ortalama Notları Görüntüle</Link>
      <div className="mb-4">
        <label className="block font-semibold">Sınıf Seçin:</label>
        <select className="border p-2 w-full" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="">Seçiniz</option>
          {classes.map((cls) => (<option key={cls} value={cls}>{cls}</option>))}
        </select>
      </div>
    </div>
  );
};

export default GradeEntry;
