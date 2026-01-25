import PropTypes from 'prop-types';
import {useStorageData} from '../StorageContext';
import {useSaveButton} from '../useSaveButton';

export default function CalculatorHeader({
  onAddSemester,
  onResetCalculator,
  semesters,
}) {
  const {saveSemesters, clearSemesters, hasSavedData} = useStorageData();
  const [saveButtonText, triggerSaveSemesters] = useSaveButton(
    'Save Subjects',
    'Saved!'
  );

  const handleSaveSemesters = () => {
    const success = saveSemesters(semesters);
    if (success) {
      triggerSaveSemesters();
    }
  };

  const handleClearSemesters = () => {
    clearSemesters();
    onResetCalculator();
  };
  return (
    <div className="calculator-header">
      <h3>Enter Semesters and Subjects</h3>
      <div className="calculator-actions">
        <button onClick={onAddSemester} className="add-btn">
          Add Semester
        </button>
        <button onClick={onResetCalculator} className="reset-btn">
          Reset All
        </button>
        <button onClick={handleSaveSemesters} className="save-btn">
          {saveButtonText}
        </button>
        {hasSavedData.semesters && (
          <button onClick={handleClearSemesters} className="clear-saved-btn">
            Clear Saved Data
          </button>
        )}
      </div>
    </div>
  );
}

CalculatorHeader.propTypes = {
  onAddSemester: PropTypes.func.isRequired,
  onResetCalculator: PropTypes.func.isRequired,
  semesters: PropTypes.array.isRequired,
};
