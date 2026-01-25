import {createContext, useContext, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {
  STORAGE_KEYS,
  STORAGE_VERSION,
  saveToLocalStorage,
  loadFromLocalStorage,
  clearLocalStorage,
  validateGradesData,
  validateSemestersData,
} from './storageUtils';
import {DEFAULT_GRADES, DEFAULT_SEMESTER} from './constants';

/**
 * Deep comparison utility
 */
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

const StorageContext = createContext(null);

export function StorageProvider({children}) {
  const [storageErrors, setStorageErrors] = useState({
    grades: null,
    semesters: null,
  });

  const [hasSavedData, setHasSavedData] = useState({
    grades: false,
    semesters: false,
  });

  /**
   * Generic load function
   */
  const loadFromStorage = useCallback((key, validateFn, errorType) => {
    try {
      const {data, wasCorrupted} = loadFromLocalStorage(
        key,
        STORAGE_VERSION,
        validateFn
      );

      // Only show error if data was actually corrupted (not just missing)
      if (wasCorrupted) {
        setStorageErrors((prev) => ({
          ...prev,
          [errorType]: `Failed to load saved ${errorType}`,
        }));
        setHasSavedData((prev) => ({...prev, [errorType]: false}));
      } else if (data === null) {
        // No data, no error - just not saved yet
        setHasSavedData((prev) => ({...prev, [errorType]: false}));
      } else {
        // Data loaded successfully
        setHasSavedData((prev) => ({...prev, [errorType]: true}));
      }

      return data;
    } catch (error) {
      console.error(`Error in loadFromStorage for ${errorType}:`, error);
      setStorageErrors((prev) => ({
        ...prev,
        [errorType]: `Failed to load saved ${errorType}`,
      }));
      setHasSavedData((prev) => ({...prev, [errorType]: false}));
      return null;
    }
  }, []);

  /**
   * Generic save function
   */
  const saveToStorage = useCallback((key, data, errorType) => {
    try {
      // Determine default values based on error type
      let defaultValue;
      if (errorType === 'grades') {
        defaultValue = DEFAULT_GRADES;
      } else if (errorType === 'semesters') {
        defaultValue = [
          {
            id: 1,
            name: DEFAULT_SEMESTER.name,
            subjects: [{name: '', creditHours: '', grade: '', gradePoints: 0}],
          },
        ];
      }

      // If data equals defaults, clear storage instead of saving
      if (defaultValue && deepEqual(data, defaultValue)) {
        clearLocalStorage(key);
        setStorageErrors((prev) => ({...prev, [errorType]: null}));
        setHasSavedData((prev) => ({...prev, [errorType]: false}));
        return true;
      }

      // Otherwise, save normally
      saveToLocalStorage(key, data, STORAGE_VERSION);
      setStorageErrors((prev) => ({...prev, [errorType]: null}));
      setHasSavedData((prev) => ({...prev, [errorType]: true}));
      return true;
    } catch (error) {
      setStorageErrors((prev) => ({
        ...prev,
        [errorType]: error.message || `Failed to save ${errorType}`,
      }));
      return false;
    }
  }, []);

  /**
   * Generic clear function
   */
  const clearStorage = useCallback((key, errorType) => {
    clearLocalStorage(key);
    setStorageErrors((prev) => ({...prev, [errorType]: null}));
    setHasSavedData((prev) => ({...prev, [errorType]: false}));
  }, []);

  // Create specific functions
  const loadGrades = useCallback(
    () =>
      loadFromStorage(STORAGE_KEYS.CUSTOM_GRADES, validateGradesData, 'grades'),
    [loadFromStorage]
  );

  const loadSemesters = useCallback(
    () =>
      loadFromStorage(
        STORAGE_KEYS.SEMESTERS_DATA,
        validateSemestersData,
        'semesters'
      ),
    [loadFromStorage]
  );

  const saveGrades = useCallback(
    (data) => saveToStorage(STORAGE_KEYS.CUSTOM_GRADES, data, 'grades'),
    [saveToStorage]
  );

  const saveSemesters = useCallback(
    (data) => saveToStorage(STORAGE_KEYS.SEMESTERS_DATA, data, 'semesters'),
    [saveToStorage]
  );

  const clearGrades = useCallback(
    () => clearStorage(STORAGE_KEYS.CUSTOM_GRADES, 'grades'),
    [clearStorage]
  );

  const clearSemesters = useCallback(
    () => clearStorage(STORAGE_KEYS.SEMESTERS_DATA, 'semesters'),
    [clearStorage]
  );

  const value = {
    loadGrades,
    loadSemesters,
    saveGrades,
    saveSemesters,
    clearGrades,
    clearSemesters,
    storageErrors,
    hasSavedData,
  };

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
}

StorageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useStorageData() {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error('useStorageData must be used within a StorageProvider');
  }
  return context;
}
