// CGPA Calculator Constants

export const DEFAULT_GRADES = {
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
};

export const PERFORMANCE_LEVELS = [
  {min: 3.5, label: 'Excellent'},
  {min: 3.0, label: 'Very Good'},
  {min: 2.5, label: 'Good'},
  {min: 2.0, label: 'Satisfactory'},
  {min: 1.0, label: 'Poor'},
  {min: 0, label: 'Fail'},
];

export const GRADE_POINT_LIMITS = {
  min: 0,
  max: 8,
  step: 0.1,
};

export const CGPA_SCALE = {
  max: 4.0,
  min: 0.0,
};

export const DEFAULT_SEMESTER = {
  name: 'Semester 1',
  subjects: [{name: '', creditHours: '', grade: '', gradePoints: 0}],
};

export const DEFAULT_SUBJECT = {
  name: '',
  creditHours: '',
  grade: '',
  gradePoints: 0,
};

export const PERFORMANCE_BAR_LABELS = ['0.0', '1.0', '2.0', '3.0', '4.0'];

export const CREDIT_HOUR_LIMITS = {
  min: 0,
  step: 0.5,
};
