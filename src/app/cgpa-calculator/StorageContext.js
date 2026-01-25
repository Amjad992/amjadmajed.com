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
