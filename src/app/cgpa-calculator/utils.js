// CGPA Calculator Utility Functions

import {PERFORMANCE_LEVELS, CGPA_SCALE} from './constants';

/**
 * Calculate GPA for a single semester
 * @param {Array} subjects - Array of subject objects
 * @param {Object} customGrades - Grade points mapping
 * @returns {Object} - { gpa, totalCredits }
 */
export const calculateSemesterGPA = (subjects, customGrades) => {
  let totalQualityPoints = 0;
  let totalCreditHours = 0;

  subjects.forEach((subject) => {
    const credits = parseFloat(subject.creditHours) || 0;
    const gradePoints = customGrades[subject.grade] || 0;
    totalQualityPoints += credits * gradePoints;
    totalCreditHours += credits;
  });

  const gpa = totalCreditHours > 0 ? totalQualityPoints / totalCreditHours : 0;
  return {gpa, totalCredits: totalCreditHours};
};

/**
 * Calculate overall CGPA from all semesters
 * @param {Array} semesters - Array of semester objects
 * @param {Object} customGrades - Grade points mapping
 * @returns {Object} - { cgpa, totalCredits, semesterStats }
 */
export const calculateCGPA = (semesters, customGrades) => {
  let overallQualityPoints = 0;
  let overallCreditHours = 0;

  const semesterStats = semesters.map((semester) => {
    const {gpa, totalCredits} = calculateSemesterGPA(
      semester.subjects,
      customGrades
    );

    overallQualityPoints += gpa * totalCredits;
    overallCreditHours += totalCredits;

    return {gpa, totalCredits};
  });

  const cgpa =
    overallCreditHours > 0 ? overallQualityPoints / overallCreditHours : 0;

  return {
    cgpa,
    totalCredits: overallCreditHours,
    semesterStats,
  };
};

/**
 * Get performance level text based on CGPA
 * @param {number} cgpa - The CGPA value
 * @param {number} totalCredits - Total credit hours
 * @returns {string} - Performance level text
 */
export const getPerformanceLevel = (cgpa, totalCredits) => {
  if (totalCredits === 0) {
    return 'No data entered yet';
  }

  for (const level of PERFORMANCE_LEVELS) {
    if (cgpa >= level.min) {
      return level.label;
    }
  }

  return 'Fail';
};

/**
 * Get performance bar width percentage
 * @param {number} cgpa - The CGPA value
 * @returns {number} - Width percentage (0-100)
 */
export const getPerformanceBarWidth = (cgpa) => {
  return Math.min(100, Math.max(0, (cgpa / CGPA_SCALE.max) * 100));
};

/**
 * Validate and clamp grade points value
 * @param {string|number} value - Input value
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {number} - Validated and clamped value
 */
export const validateGradePoints = (value, min = 0, max = 8) => {
  if (value === '' || value === null || value === undefined) {
    return 0;
  }

  const parsed = parseFloat(value);
  if (isNaN(parsed)) {
    return 0;
  }

  return Math.max(min, Math.min(max, parsed));
};

/**
 * Generate unique grade name
 * @param {Object} existingGrades - Current grades object
 * @param {string} baseName - Base name for new grade
 * @returns {string} - Unique grade name
 */
export const generateUniqueGradeName = (existingGrades, baseName = 'New') => {
  const gradeNames = Object.keys(existingGrades);
  let newGradeName = baseName;
  let counter = 1;

  while (gradeNames.includes(newGradeName)) {
    newGradeName = `${baseName}${counter}`;
    counter++;
  }

  return newGradeName;
};

/**
 * Format number to specified decimal places
 * @param {number} value - Number to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} - Formatted number string
 */
export const formatToDecimalPlaces = (value, decimals = 2) => {
  return value.toFixed(decimals);
};
