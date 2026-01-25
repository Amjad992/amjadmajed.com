import {useState, useCallback, useRef} from 'react';

/**
 * Custom hook for save button feedback
 * Changes button text temporarily after save action
 *
 * @param {string} defaultText - Default button text (e.g., "Save")
 * @param {string} savedText - Text to show after save (e.g., "Saved!")
 * @param {number} duration - How long to show savedText in milliseconds (default: 2000)
 * @returns {Array} [buttonText, triggerSave] - Current text and trigger function
 */
export function useSaveButton(
  defaultText = 'Save',
  savedText = 'Saved!',
  duration = 2000
) {
  const [buttonText, setButtonText] = useState(defaultText);
  const timeoutRef = useRef(null);

  const triggerSave = useCallback(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Show "Saved!" text
    setButtonText(savedText);

    // Revert to default text after duration
    timeoutRef.current = setTimeout(() => {
      setButtonText(defaultText);
      timeoutRef.current = null;
    }, duration);
  }, [defaultText, savedText, duration]);

  return [buttonText, triggerSave];
}
