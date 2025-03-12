# Student Grades App

## 📌 Overview
Student Grades App is a web-based application developed using **React.js (version 18)**. It allows users (such as teachers) to enter and manage student grades dynamically without storing them permanently in a database. The application fetches student, class, section, and subject data from JSON files and manages grades using the **Context API**.

## ✨ Features
- **Class and Section Selection:** Users can select a class and section.
- **Subject Filtering:** After selecting a class and section, only relevant subjects are displayed.
- **Student Filtering:** Selecting a subject lists the students enrolled in it.
- **Grade Entry:** Users can input grades for assignments, midterms, and final exams.
- **Automatic Grade Calculation:** The application calculates student averages based on a weighted formula.
- **Context API for State Management:** Grades are stored in the React state for persistence during navigation.
- **Responsive UI:** Designed with Tailwind CSS for a smooth user experience.

## 🛠️ Technologies Used
- **React.js (18+)** – Frontend framework
- **React Router** – Page navigation
- **Context API** – Global state management
- **Tailwind CSS** – UI styling
- **Fetch API** – Fetching JSON data

## 📊 Grade Calculation Formula
Grades are calculated using the following weights:
- **Assignments (3 total):** 15%
- **Midterms (2 total):** 40%
- **Final Exam:** 45%

The formula for the calculation is:
```
Average = (Assignment1 + Assignment2 + Assignment3) / 3 * 0.15 
        + (Midterm1 + Midterm2) / 2 * 0.40 
        + Final * 0.45
```

## 📂 Project Structure
```
/student-grades-app
│── public/
│   ├── students.json
│   ├── classes.json
│   ├── sections.json
│   ├── subjects.json
│── src/
│   ├── components/
│   │   ├── GradeEntry.js
│   │   ├── StudentGrades.js
│   ├── context/
│   │   ├── GradesContext.js
│   ├── App.js
│   ├── index.js
│── package.json
│── tailwind.config.js
│── .gitignore
│── README.md
```

## 🚀 Installation & Usage
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/student-grades-app.git
cd student-grades-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Application
```sh
npm start
```


## 📜 License
This project is open-source and available under the **MIT License**.
