// Storage utility functions for CGPA Calculator

export const STORAGE_KEYS = {
  CUSTOM_GRADES: 'cgpa_calculator_custom_grades',
  SEMESTERS_DATA: 'cgpa_calculator_semesters',
};

export const STORAGE_VERSION = '1.0.0';

/**
 * Save data to localStorage with versioning
 * @param {string} key - Storage key
 * @param {any} data - Data to save
 * @param {string} version - Version string
 * @returns {boolean} - Success status
 */
export function saveToLocalStorage(key, data, version = STORAGE_VERSION) {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const toStore = {
      version,
      timestamp: Date.now(),
      data,
    };
    window.localStorage.setItem(key, JSON.stringify(toStore));
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage (${key}):`, error);
    throw error;
  }
}

/**
 * Load data from localStorage with validation
 * @param {string} key - Storage key
 * @param {string} version - Expected version
 * @param {Function} validateFn - Validation function
 * @returns {Object} - {data: any|null, wasCorrupted: boolean}
 */
export function loadFromLocalStorage(key, version = STORAGE_VERSION, validateFn) {
  if (typeof window === 'undefined') {
    return {data: null, wasCorrupted: false};
  }

  try {
    const item = window.localStorage.getItem(key);

    // No data stored - this is normal, not an error
    if (!item) {
      return {data: null, wasCorrupted: false};
    }

    const parsed = JSON.parse(item);

    // Check version
    if (parsed.version !== version) {
      console.warn(
        `Version mismatch for ${key}. Expected: ${version}, Got: ${parsed.version}`
      );
      window.localStorage.removeItem(key);
      return {data: null, wasCorrupted: true};
    }

    // Validate data structure
    if (validateFn && !validateFn(parsed.data)) {
      console.warn(`Invalid data structure for ${key}`);
      window.localStorage.removeItem(key);
      return {data: null, wasCorrupted: true};
    }

    return {data: parsed.data, wasCorrupted: false};
  } catch (error) {
    console.error(`Error loading from localStorage (${key}):`, error);
    // Clear corrupted data
    try {
      window.localStorage.removeItem(key);
    } catch (clearError) {
      console.error(`Error clearing corrupted data (${key}):`, clearError);
    }
    return {data: null, wasCorrupted: true};
  }
}

/**
 * Clear data from localStorage
 * @param {string} key - Storage key
 */
export function clearLocalStorage(key) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error clearing localStorage (${key}):`, error);
  }
}

/**
 * Validate grades data structure
 * @param {Object} data - Grades object
 * @returns {boolean} - Validation result
 */
export function validateGradesData(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return false;
  }

  // Check if at least one grade exists
  const entries = Object.entries(data);
  if (entries.length === 0) {
    return false;
  }

  // Validate each grade entry
  return entries.every(([key, value]) => {
    return (
      typeof key === 'string' &&
      key.length > 0 &&
      typeof value === 'number' &&
      value >= 0 &&
      value <= 8
    );
  });
}

/**
 * Validate semesters data structure
 * @param {Array} data - Semesters array
 * @returns {boolean} - Validation result
 */
export function validateSemestersData(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return false;
  }

  return data.every((semester) => {
    // Check semester structure
    if (
      !semester ||
      typeof semester !== 'object' ||
      !semester.id ||
      typeof semester.name !== 'string' ||
      !Array.isArray(semester.subjects) ||
      semester.subjects.length === 0
    ) {
      return false;
    }

    // Check each subject structure
    return semester.subjects.every((subject) => {
      return (
        subject &&
        typeof subject === 'object' &&
        typeof subject.name === 'string' &&
        (typeof subject.creditHours === 'string' ||
          typeof subject.creditHours === 'number') &&
        typeof subject.grade === 'string'
      );
    });
  });
}
