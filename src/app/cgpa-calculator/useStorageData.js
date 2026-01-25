import {useState, useCallback} from 'react';
import {
  STORAGE_KEYS,
  STORAGE_VERSION,
  saveToLocalStorage,
  loadFromLocalStorage,
  clearLocalStorage,
  validateGradesData,
  validateSemestersData,
} from './storageUtils';

/**
 * Central hook for managing localStorage operations
 * Handles saving, loading, and clearing both grades and semesters data
 */
export function useStorageData() {
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
   * @param {string} key - Storage key
   * @param {Function} validateFn - Validation function
   * @param {string} errorType - Error type ('grades' or 'semesters')
   * @returns {any|null} - Loaded data or null
   */
  const loadFromStorage = useCallback((key, validateFn, errorType) => {
    try {
      const loaded = loadFromLocalStorage(key, STORAGE_VERSION, validateFn);

      if (loaded === null) {
        setStorageErrors((prev) => ({
          ...prev,
          [errorType]: `Failed to load saved ${errorType}`,
        }));
        setHasSavedData((prev) => ({...prev, [errorType]: false}));
      } else {
        setHasSavedData((prev) => ({...prev, [errorType]: true}));
      }

      return loaded;
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
   * @param {string} key - Storage key
   * @param {any} data - Data to save
   * @param {string} errorType - Error type ('grades' or 'semesters')
   * @returns {boolean} - Success status
   */
  const saveToStorage = useCallback((key, data, errorType) => {
    try {
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
   * @param {string} key - Storage key
   * @param {string} errorType - Error type ('grades' or 'semesters')
   */
  const clearStorage = useCallback((key, errorType) => {
    clearLocalStorage(key);
    setStorageErrors((prev) => ({...prev, [errorType]: null}));
    setHasSavedData((prev) => ({...prev, [errorType]: false}));
  }, []);

  // Create specific functions using the generic ones
  const loadGrades = useCallback(
    () => loadFromStorage(STORAGE_KEYS.CUSTOM_GRADES, validateGradesData, 'grades'),
    [loadFromStorage]
  );

  const loadSemesters = useCallback(
    () => loadFromStorage(STORAGE_KEYS.SEMESTERS_DATA, validateSemestersData, 'semesters'),
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

  return {
    loadGrades,
    loadSemesters,
    saveGrades,
    saveSemesters,
    clearGrades,
    clearSemesters,
    storageErrors,
    hasSavedData,
  };
}
