'use client';
import {useState, useEffect} from 'react';
import Navigation from '../../components/Navigation';
import './cgpa-calculator.css';

export default function CGPACalculator() {
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      name: 'Semester 1',
      subjects: [{name: '', creditHours: '', grade: '', gradePoints: 0}],
    },
  ]);
  const [cgpa, setCgpa] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);

  const [customGrades, setCustomGrades] = useState({
    'A+': 4.0,
    A: 3.75,
    'A-': 3.5,
    'B+': 3.25,
    B: 3.0,
    'B-': 2.75,
    'C+': 2.5,
    C: 2.25,
    'C-': 2.0,
    'D+': 1.75,
    D: 1.5,
    F: 0.0,
  });

  const addSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      name: `Semester ${semesters.length + 1}`,
      subjects: [{name: '', creditHours: '', grade: '', gradePoints: 0}],
    };
    setSemesters([...semesters, newSemester]);
  };

  const removeSemester = (semesterId) => {
    if (semesters.length > 1) {
      const newSemesters = semesters.filter((sem) => sem.id !== semesterId);
      setSemesters(newSemesters);
    }
  };

  const updateSemesterName = (semesterId, newName) => {
    const updatedSemesters = semesters.map((sem) =>
      sem.id === semesterId ? {...sem, name: newName} : sem
    );
    setSemesters(updatedSemesters);
  };

  const addSubject = (semesterId) => {
    const updatedSemesters = semesters.map((sem) =>
      sem.id === semesterId
        ? {
            ...sem,
            subjects: [
              ...sem.subjects,
              {name: '', creditHours: '', grade: '', gradePoints: 0},
            ],
          }
        : sem
    );
    setSemesters(updatedSemesters);
  };

  const removeSubject = (semesterId, subjectIndex) => {
    const updatedSemesters = semesters.map((sem) => {
      if (sem.id === semesterId && sem.subjects.length > 1) {
        const newSubjects = sem.subjects.filter((_, i) => i !== subjectIndex);
        return {...sem, subjects: newSubjects};
      }
      return sem;
    });
    setSemesters(updatedSemesters);
  };

  const updateSubject = (semesterId, subjectIndex, field, value) => {
    const updatedSemesters = semesters.map((sem) => {
      if (sem.id === semesterId) {
        const newSubjects = [...sem.subjects];
        newSubjects[subjectIndex][field] = value;

        if (field === 'grade' || field === 'creditHours') {
          const gradePoints =
            customGrades[newSubjects[subjectIndex].grade] || 0;
          newSubjects[subjectIndex].gradePoints = gradePoints;
        }

        return {...sem, subjects: newSubjects};
      }
      return sem;
    });
    setSemesters(updatedSemesters);
  };

  const updateCustomGrade = (grade, points) => {
    setCustomGrades({...customGrades, [grade]: parseFloat(points) || 0});
  };

  const calculateSemesterGPA = (subjects) => {
    let totalQualityPoints = 0;
    let totalCreditHours = 0;

    subjects.forEach((subject) => {
      const credits = parseFloat(subject.creditHours) || 0;
      const gradePoints = customGrades[subject.grade] || 0;
      totalQualityPoints += credits * gradePoints;
      totalCreditHours += credits;
    });

    const gpa =
      totalCreditHours > 0 ? totalQualityPoints / totalCreditHours : 0;
    return {gpa, totalCredits: totalCreditHours};
  };

  const calculateCGPA = () => {
    let overallQualityPoints = 0;
    let overallCreditHours = 0;

    // Calculate semester stats without updating state
    const semesterStats = semesters.map((semester) => {
      const {gpa, totalCredits} = calculateSemesterGPA(semester.subjects);

      overallQualityPoints += gpa * totalCredits;
      overallCreditHours += totalCredits;

      return {gpa, totalCredits};
    });

    const calculatedCGPA =
      overallCreditHours > 0 ? overallQualityPoints / overallCreditHours : 0;

    // Only update CGPA and total credits, not the semesters array
    setCgpa(calculatedCGPA);
    setTotalCredits(overallCreditHours);

    return semesterStats;
  };

  // Get semester stats for display without causing re-renders
  const getSemesterStats = (semester) => {
    return calculateSemesterGPA(semester.subjects);
  };

  const resetCalculator = () => {
    setSemesters([
      {
        id: 1,
        name: 'Semester 1',
        subjects: [{name: '', creditHours: '', grade: '', gradePoints: 0}],
      },
    ]);
    setCgpa(0);
    setTotalCredits(0);
  };

  useEffect(() => {
    calculateCGPA();
  }, [semesters, customGrades]);

  return (
    <>
      <Navigation />
      <main className="cgpa-calculator-page">
        <div className="container">
          {/* Hero Section */}
          <section className="calculator-hero">
            <h1>CGPA and GPA Calculator!</h1>
            <p className="calculator-tagline">
              Calculate your CGPA and GPA with precision
            </p>
          </section>

          {/* Custom Grade System Configuration */}
          <section className="custom-system-config">
            <h3>Configure Grade Points</h3>
            <div className="custom-grades-grid">
              {Object.entries(customGrades).map(([grade, points]) => (
                <div key={grade} className="custom-grade-item">
                  <label>{grade}:</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="4"
                    value={points}
                    onChange={(e) => updateCustomGrade(grade, e.target.value)}
                    className="grade-points-input"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Calculator Section */}
          <section className="calculator-section">
            <div className="calculator-header">
              <h3>Enter Your Semesters and Subjects</h3>
              <div className="calculator-actions">
                <button onClick={addSemester} className="add-btn">
                  Add Semester
                </button>
                <button onClick={resetCalculator} className="reset-btn">
                  Reset All
                </button>
              </div>
            </div>

            {/* Semesters */}
            {semesters.map((semester) => (
              <div key={semester.id} className="semester-container">
                <div className="semester-header">
                  <input
                    type="text"
                    value={semester.name}
                    onChange={(e) =>
                      updateSemesterName(semester.id, e.target.value)
                    }
                    className="semester-name-input"
                  />
                  <div className="semester-stats">
                    <span className="semester-gpa">
                      GPA: {getSemesterStats(semester).gpa.toFixed(2)}
                    </span>
                    <span className="semester-credits">
                      Credits: {getSemesterStats(semester).totalCredits}
                    </span>
                  </div>
                  <div className="semester-actions">
                    <button
                      onClick={() => addSubject(semester.id)}
                      className="add-subject-btn"
                    >
                      Add Subject
                    </button>
                    <button
                      onClick={() => removeSemester(semester.id)}
                      className="remove-semester-btn"
                      disabled={semesters.length === 1}
                    >
                      Remove Semester
                    </button>
                  </div>
                </div>

                <div className="subjects-container">
                  <div className="subjects-header">
                    <div className="col-subject">Subject Name</div>
                    <div className="col-credits">Credit Hours</div>
                    <div className="col-grade">Grade</div>
                    <div className="col-points">Grade Points</div>
                    <div className="col-action">Action</div>
                  </div>

                  {semester.subjects.map((subject, index) => (
                    <div
                      key={`${semester.id}-${index}`}
                      className="subject-row"
                    >
                      <input
                        type="text"
                        placeholder="Enter subject name"
                        value={subject.name}
                        onChange={(e) =>
                          updateSubject(
                            semester.id,
                            index,
                            'name',
                            e.target.value
                          )
                        }
                        className="subject-input"
                      />
                      <input
                        type="number"
                        placeholder="Credits"
                        min="0"
                        step="0.5"
                        value={subject.creditHours}
                        onChange={(e) =>
                          updateSubject(
                            semester.id,
                            index,
                            'creditHours',
                            e.target.value
                          )
                        }
                        className="credits-input"
                      />
                      <select
                        value={subject.grade}
                        onChange={(e) =>
                          updateSubject(
                            semester.id,
                            index,
                            'grade',
                            e.target.value
                          )
                        }
                        className="grade-select"
                      >
                        <option value="">Select Grade</option>
                        {Object.keys(customGrades).map((grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        ))}
                      </select>
                      <div className="grade-points-display">
                        {subject.gradePoints.toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeSubject(semester.id, index)}
                        className="remove-btn"
                        disabled={semester.subjects.length === 1}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Results Section */}
          <section className="results-section">
            <div className="results-grid">
              <div className="result-card">
                <h3>CGPA</h3>
                <div className="result-value">{cgpa.toFixed(2)}</div>
                <p>Cumulative Grade Point Average</p>
              </div>
              <div className="result-card">
                <h3>Total Credits</h3>
                <div className="result-value">{totalCredits}</div>
                <p>Total Credit Hours</p>
              </div>
              <div className="result-card">
                <h3>Semesters</h3>
                <div className="result-value">{semesters.length}</div>
                <p>Number of Semesters</p>
              </div>
            </div>

            {/* Performance Indicator */}
            <div className="performance-indicator">
              <h3>Performance Level</h3>
              <div className="performance-bar">
                <div
                  className="performance-fill"
                  style={{width: `${(cgpa / 4) * 100}%`}}
                ></div>
              </div>
              <div className="performance-labels">
                <span>0.0</span>
                <span>1.0</span>
                <span>2.0</span>
                <span>3.0</span>
                <span>4.0</span>
              </div>
              <p className="performance-text">
                {cgpa >= 3.5
                  ? 'Excellent'
                  : cgpa >= 3.0
                  ? 'Very Good'
                  : cgpa >= 2.5
                  ? 'Good'
                  : cgpa >= 2.0
                  ? 'Satisfactory'
                  : cgpa >= 1.0
                  ? 'Poor'
                  : 'Fail'}
              </p>
            </div>
          </section>

          {/* Instructions */}
          <section className="instructions">
            <h3>How to Use</h3>
            <ol>
              <li>Configure the grade points for each grade if needed</li>
              <li>Add semesters by clicking "Add Semester" button</li>
              <li>For each semester, add subjects by clicking "Add Subject"</li>
              <li>Enter subject name, credit hours, and select the grade</li>
              <li>
                Each semester's GPA and credit hours will be calculated
                automatically
              </li>
              <li>Your overall CGPA will be calculated across all semesters</li>
              <li>Use "Reset All" to clear all data and start over</li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
