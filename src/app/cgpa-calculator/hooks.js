import {useState, useEffect} from 'react';
import {DEFAULT_GRADES, DEFAULT_SEMESTER, DEFAULT_SUBJECT} from './constants';
import {
  calculateCGPA,
  validateGradePoints,
  generateUniqueGradeName,
} from './utils';
import {useStorageData} from './StorageContext';

export function useCGPACalculator(customGrades) {
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      name: DEFAULT_SEMESTER.name,
      subjects: [{...DEFAULT_SUBJECT}],
    },
  ]);
  const [cgpa, setCgpa] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
  const {loadSemesters} = useStorageData();

  // Load semesters from localStorage on mount
  useEffect(() => {
    try {
      const loaded = loadSemesters();
      if (loaded) {
        setSemesters(loaded);
      }
    } catch (error) {
      console.error('Error in useCGPACalculator:', error);
      // Keep using default semesters
    }
  }, [loadSemesters]);

  // Calculate CGPA whenever semesters or grades change
  useEffect(() => {
    const {cgpa: calculatedCGPA, totalCredits: calculatedCredits} =
      calculateCGPA(semesters, customGrades);
    setCgpa(calculatedCGPA);
    setTotalCredits(calculatedCredits);
  }, [semesters, customGrades]);

  const addSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      name: `Semester ${semesters.length + 1}`,
      subjects: [{...DEFAULT_SUBJECT}],
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
            subjects: [...sem.subjects, {...DEFAULT_SUBJECT}],
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

  const updateSubject = (
    semesterId,
    subjectIndex,
    field,
    value,
    customGrades
  ) => {
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

  const resetCalculator = () => {
    setSemesters([
      {
        id: 1,
        name: DEFAULT_SEMESTER.name,
        subjects: [{...DEFAULT_SUBJECT}],
      },
    ]);
    setCgpa(0);
    setTotalCredits(0);
  };

  return {
    semesters,
    cgpa,
    totalCredits,
    addSemester,
    removeSemester,
    updateSemesterName,
    addSubject,
    removeSubject,
    updateSubject,
    resetCalculator,
  };
}

export function useGradeManagement() {
  const [customGrades, setCustomGrades] = useState(DEFAULT_GRADES);
  const {loadGrades} = useStorageData();

  // Load grades from localStorage on mount
  useEffect(() => {
    try {
      const loaded = loadGrades();
      if (loaded) {
        setCustomGrades(loaded);
      }
    } catch (error) {
      console.error('Error in useGradeManagement:', error);
      // Keep using DEFAULT_GRADES
    }
  }, [loadGrades]);

  const updateCustomGrade = (oldGrade, newGrade, points) => {
    const newCustomGrades = {...customGrades};
    const numericValue = validateGradePoints(points);

    // If grade name changed, remove old grade and add new one
    if (oldGrade !== newGrade) {
      delete newCustomGrades[oldGrade];
      newCustomGrades[newGrade] = numericValue;
    } else {
      newCustomGrades[newGrade] = numericValue;
    }

    setCustomGrades(newCustomGrades);
  };

  const addCustomGrade = () => {
    const newGradeName = generateUniqueGradeName(customGrades);
    setCustomGrades({
      ...customGrades,
      [newGradeName]: 0.0,
    });
  };

  const removeCustomGrade = (gradeToRemove) => {
    const newCustomGrades = {...customGrades};
    delete newCustomGrades[gradeToRemove];
    setCustomGrades(newCustomGrades);
  };

  const resetGradesToDefault = () => {
    setCustomGrades({...DEFAULT_GRADES});
  };

  return {
    customGrades,
    updateCustomGrade,
    addCustomGrade,
    removeCustomGrade,
    resetGradesToDefault,
  };
}
